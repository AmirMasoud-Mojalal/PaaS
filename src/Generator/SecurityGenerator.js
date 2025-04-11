const { isPathExists, createFile, firstLetterCaptalize } = require('./util');

const SecurityGenerator = (feedContent, ConfigObject) => {
  listOfObjects = feedContent.listOfObjects();
  const configPath = ConfigObject.getConfigPath();
  const configPackageName = ConfigObject.getConfgiPackageName();
  const webAccessPath = ConfigObject['webAccessPath'];
  const artifactId = ConfigObject['artifactId'];

  // .requestMatchers("${webAccessPath}${artifactId}/${objectName}s").hasAnyRole("${objectName.toUpperCase()}")`;
  let securityRule = ``;
  Object.keys(listOfObjects).map((objectName) => {
    securityRule += `
                        .requestMatchers("/${objectName}s").hasAnyRole("${objectName.toUpperCase()}")`;
  });
  // console.log(securityRule);
  let injectedContent = `package ${configPackageName};

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
        (debug = true)
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final UserDetailsService userDetailService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
//              .cors(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(request -> request
                        .requestMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                        .requestMatchers("/signup").hasRole("SUPERUSER")
                        .requestMatchers("/signin").permitAll()
//                        .requestMatchers("/users/*").hasAnyRole("SUPERUSER")
//                        .requestMatchers("/roles/*").hasAnyRole("SUPERUSER")
                        .requestMatchers("/users").permitAll()
                        .requestMatchers("/roles").hasAnyRole("USER")
                        ${securityRule}
                        .anyRequest().authenticated())

                .sessionManagement(manager -> manager.sessionCreationPolicy(STATELESS))
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailService);
//        authProvider.setUserDetailsService(userService.userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
            throws Exception {
        return config.getAuthenticationManager();
    }

//    @Bean
//    public UserDetailsService userDetailsService() {
//        return username -> userRepository.findByEmail(username)
//                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
//    }

//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("http://localhost:8090/"));
//        configuration.setAllowedMethods(Arrays.asList("GET", "POST"));
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }

}
`;
  isPathExists(configPath);
  createFile(`${configPath}`, 'SecurityConfiguration.java', injectedContent);
};
module.exports = SecurityGenerator;
