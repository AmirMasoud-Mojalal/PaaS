const { isPathExists, createFile, firstLetterCaptalize } = require('./util');
const { getDataSourceNameList } = require('./DataSourceConfig')

const ConfigGenerator = (feedContent, ConfigObjects) => {
    const basePath = ConfigObjects.getBasePath();
    const actualPath = ConfigObjects.getActualPath();
    const configPath = ConfigObjects.getConfigPath();
    const controllerPath = ConfigObjects.getControllerPath();
    const defaultDataSourceName = ConfigObjects.defaultDataSource;
    const defaultDataSourceSchema = ConfigObjects.defaultDataSourceSchema;
    const entityPath = ConfigObjects.getEntityPath(defaultDataSourceName);
    const exceptionPath = ConfigObjects.getExceptionPath();
    const modelPath = ConfigObjects.getModelPath();
    const modelRequestPath = ConfigObjects.getModelRequestPath();
    const modelResponsePath = ConfigObjects.getModelResponsePath();
    const repositoryBasePath = ConfigObjects.getRepositoryPath(
        defaultDataSourceName
    );
    const repositoryImplPath = ConfigObjects.getRepositoryImplPath(
        defaultDataSourceName
    );
    const serviceBasePath = ConfigObjects.getServiceBasePath();
    const serviceImplPatch = ConfigObjects.getServiceImplPath();
    const serviceLogicPatch = ConfigObjects.getServiceLogicPath();
    const actualTestPath = ConfigObjects.getActualTestPath();
    const testControllerPath = ConfigObjects.getTestControllerPath();
    const testRepositoryPath = ConfigObjects.getTestRepositoryPath();

    const configPackageName = ConfigObjects.getConfgiPackageName();
    const baseServicePackageName = ConfigObjects.getServicePackageName();
    const serviceImplPackageName = ConfigObjects.getServiceImplPackageName();
    const controllerPackageName = ConfigObjects.getControllerPackageName();
    const modelPackageName = ConfigObjects.getModelPackageName();
    const modelPackageRequest = ConfigObjects.getModelPackageName() + `.request`;
    const modelPackageResponse =
        ConfigObjects.getModelPackageName() + `.response`;
    const entityPackageName = ConfigObjects.getEntityPackageName(
        defaultDataSourceName
    );
    const exceptionPackageName = ConfigObjects.getExceptionPackageName();
    const repositoryPackageName = ConfigObjects.getRepositoryPackageName(
        defaultDataSourceName
    );

    // List<Role> roleList = new ArrayList<Role>();

    // roleList.add(Role.builder()
    //     .id(2L)
    //     .name("name")
    //     .nameFarsi("namefarsi")
    //     .owner("owner")
    //     .build());

    // roleRepository.saveAll(roleList);

    let listOfRoleNames = ``;
    const listOfObjects = feedContent.listOfObjects();
    Object.keys(listOfObjects).map((objectName, index) => {
        // if (isRouteNameValid(objectName) === true) {
        // console.log(objectName)
        // console.log(feedContent.getAppObjectByAppObjectId(objectName));
        // console.log(feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']);
        // console.log(feedContent.getAppObjectByAppObjectId(objectName)['pluralable']);

        listOfRoleNames += `
            roleList.add(
                Role.builder()
                    .id(${index + 1}L)
                    .name("ROLE_${objectName.toUpperCase()}")
                    .nameFarsi("${feedContent.getAppObjectByAppObjectId(objectName)['pluralLable']}")
                    .owner("owner")
                .build()
            );
            `;

        // } else {
        //     console.log(
        //         `appObjectId ${objectName} of  is NOT valid route name in contentMap`
        //     );
        // }
    })
    // console.log(listOfRoleNames)
    let superUser = {};
    superUser['firstName'] = ConfigObjects['user']['superUser']['firstName'];
    superUser['lastName'] = ConfigObjects['user']['superUser']['lastName'];
    superUser['email'] = ConfigObjects['user']['superUser']['email'];
    superUser['username'] = ConfigObjects['user']['superUser']['username'];
    superUser['password'] = ConfigObjects['user']['superUser']['password'];
    superUser['owner'] = ConfigObjects['user']['superUser']['owner'];
    superUser['date'] = ConfigObjects['user']['superUser']['date'];
    superUser['telNumber'] = ConfigObjects['user']['superUser']['telNumber'];

    // console.log(superUser['firstName']);
    /********************************************************************************
     *                        Config package
     ********************************************************************************/

    let injectedContent = `package ${configPackageName};

import java.io.IOException;

import ${exceptionPackageName}.ApiError;
import ${baseServicePackageName}.JwtService;
import ${serviceImplPackageName}.CustomUserDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

import static org.springframework.http.HttpStatus.FORBIDDEN;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;
    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain)
            throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        //  1)  Validation check
        try {
            if (StringUtils.isEmpty(authHeader) || !StringUtils.startsWith(authHeader, "Bearer ")) {
                filterChain.doFilter(request, response);
                return;
            }
            //  2)  Extract Token
            jwt = authHeader.substring(7);
            //  3)  Extract username from Token
            userEmail = jwtService.extractUserName(jwt);
            //  4)  Check weather the user is authenticated
            if (StringUtils.isNotEmpty(userEmail) && SecurityContextHolder.getContext().getAuthentication() == null) {
                //  Extract userDetails from DB
                UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail);
                //  6)  compare jwt token with extracted userDetails
                if (jwtService.isTokenValid(jwt, userDetails)) {
                    //  6.1)    Both are equal, and user is authenticated successfully.
                    SecurityContext context = SecurityContextHolder.createEmptyContext();
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails, null, userDetails.getAuthorities()
                    );
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    context.setAuthentication(authToken);
                    SecurityContextHolder.setContext(context);
                }
            }
            filterChain.doFilter(request, response);
        } catch (Exception ex) {
            ObjectMapper objectMapper = new ObjectMapper();
            ApiError apiError = new ApiError(FORBIDDEN);
            apiError.setMessage("زمان انقضای توکن تمام شده است");

            response.setStatus(HttpStatus.FORBIDDEN.value());
            response.getWriter().write(
                    "{" +
                            "    \\"apierror\\": {" +
                            "        \\"status\\": 403," +
                            "        \\"timestamp\\": \\"19-01-2025 09:32:49\\"," +
                            "        \\"message\\": \\"token expired. login again.\\"," +
                            "        \\"debugMessage\\": null," +
                            "        \\"subErrors\\": null" +
                            "    }" +
                            "}"
            );
        }
    }
}
`;
    createFile(`${configPath}`, `JwtAuthenticationFilter.java`, injectedContent);
    // console.log('SecurityConfiguration file created!');
    // console.log('JwtAuthenticationFilter file created!');
    if (ConfigObjects['isThereAnyRestService']) {
        injectedContent = `package ${configPackageName};

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

@Configuration
public class RestTemplateConfiguration {
    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {

        return builder
                .setConnectTimeout(Duration.ofMillis(3000))
                .setReadTimeout(Duration.ofMillis(3000))
                .build();
    }
}`;
        createFile(
            `${configPath}`,
            'RestTemplateConfiguration.java',
            injectedContent
        );
    }

    injectedContent = `package com.behsazan.projects.mutualUnderstanding.config;

    import org.springframework.boot.context.properties.ConfigurationProperties;
    import org.springframework.boot.context.properties.EnableConfigurationProperties;
    import org.springframework.context.annotation.Configuration;
    
    @Configuration
    @ConfigurationProperties
    public class StorageProperties {
        /**
         * Folder location for storing files
         */
        private String location = "upload-dir";
    
        public String getLocation() {
            return location;
        }
    
        public void setLocation(String location) {
            this.location = location;
        }
    }
    `
    createFile(
        `${configPath}`,
        'StorageProperties.java',
        injectedContent
    );
    // const datasources = ConfigObjects.getConfiguredDatasources();
    // Object.keys(datasources).map((datasource) => {
    const datasources = getDataSourceNameList()
    // console.log(datasources);
    // all datasources
    datasources.map((datasource) => {
        dataSourceEntityPackageName =
            ConfigObjects.getEntityPackageName(datasource);
        //   console.log('eeeeeeeeeeeeeeeeee');
        dataSourceRepositoryPackageName =
            ConfigObjects.getRepositoryPackageName(datasource);
        // console.log('^^^^^^^^^^^^^^^^^^^');
        // console.log(datasource);
        const isPrimary = datasource == defaultDataSourceName ? true : false;

        const importPrimary =
            isPrimary == true
                ? `import org.springframework.context.annotation.Primary;`
                : ``;
        const primaryAnnotation = isPrimary == true ? `@Primary` : ``;
        injectedContent = `package ${configPackageName};

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
${importPrimary}
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Map;
import java.util.HashMap;
import java.util.Objects;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
        basePackages ={
                "${dataSourceRepositoryPackageName}",
        },
        entityManagerFactoryRef = "${datasource}EntityManagerFactory",
        transactionManagerRef = "${datasource}TransactionManager"
)
public class ${firstLetterCaptalize(datasource)}DataSourceConfiguration {
    ${primaryAnnotation}
    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.${datasource}")
    public DataSourceProperties ${datasource}DataSourceProperties(){
        return new DataSourceProperties();
    }

    ${primaryAnnotation}
    @Bean(name = "${datasource}DataSource")
    public DataSource ${datasource}DataSource(){
        return ${datasource}DataSourceProperties()
                .initializeDataSourceBuilder()
                .build();
    }
    
    ${primaryAnnotation}
    @Bean(name = "${datasource}EntityManagerFactory")
    LocalContainerEntityManagerFactoryBean ${datasource}EntityManagerFactory(
            EntityManagerFactoryBuilder builder){
        
        Map<String, Object> properties = new HashMap<>();
        // properties.put("spring.jpa.hibernate.ddl-auto", true);
        // properties.put("spring.jpa.hibernate.ddl-auto", "update");
        //  it works
        // properties.put("hibernate.hbm2ddl.auto","update");
        properties.put("spring.jpa.show-sql",true);
        properties.put("spring.jpa.properties.hibernate.format_sql",true);
        properties.put("logging.level.org.hibernate.stat","debug");

        return builder
                .dataSource(${datasource}DataSource())
                .packages("${dataSourceEntityPackageName}")
                .persistenceUnit("${datasource}")
                .properties(properties)
                .build();
    }

    ${primaryAnnotation}
    @Bean(name = "${datasource}TransactionManager")
    PlatformTransactionManager ${datasource}TransactionManager(
            @Qualifier("${datasource}EntityManagerFactory") LocalContainerEntityManagerFactoryBean ${datasource}EntityManagerFactory
    ){
        return new JpaTransactionManager(
                Objects.requireNonNull(
                        ${datasource}EntityManagerFactory.getObject())
        );
    }
}
`;
        createFile(
            `${configPath}`,
            `${firstLetterCaptalize(datasource)}DataSourceConfiguration.java`,
            injectedContent
        );
    });

    /********************************************************************************
     *                        Controller package
     ********************************************************************************/
    //  @RequestMapping("${ConfigObjects['webAccessPath'] + ConfigObjects['artifactId']

    injectedContent = `package ${controllerPackageName};

import ${modelPackageRequest}.SigninRequest;
import ${modelPackageResponse}.JwtAuthenticationResponse;
import ${modelPackageName}.UserDTO;
import ${baseServicePackageName}.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/signup")
    public ResponseEntity<Void> signup(@RequestBody UserDTO userDTO) {
        return ResponseEntity.created((authenticationService.signup(userDTO))).build();
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest request) {
        return ResponseEntity.ok(authenticationService.signin(request));
    }
}
`;
    isPathExists(controllerPath);
    createFile(
        `${controllerPath}`,
        `AuthenticationController.java`,
        injectedContent
    );

    // @RequestMapping("${ConfigObjects['webAccessPath'] + ConfigObjects['artifactId']
    injectedContent = `package ${controllerPackageName};

import ${modelPackageName}.UserDTO;
import ${baseServicePackageName}.UserService;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    public static final String USER_PATH = "${ConfigObjects['webAccessPath'] + '/' + ConfigObjects['artifactId']
        }/users";
    public static final String USER_PATH_ID = USER_PATH + "/{userId}";

    private final UserService userService;

    //  Create User
    @PostMapping("")
    public ResponseEntity<Void> create(@Validated @RequestBody UserDTO userDTO){
        return ResponseEntity.created(userService.create(userDTO)).build();
    }

    //  List Users
    @GetMapping("")
    public ResponseEntity<Map<String, Object>> getAll(Pageable pageable, Principal principal){
        System.out.println(principal);
        System.out.println(principal.getName());
//        SecurityContext securityContext = SecurityContextHolder.getContext();
        return ResponseEntity.ok().body(userService.getAll(pageable, principal));
    }

    //  Get User
    @GetMapping("/{userId}")
    public ResponseEntity<UserDTO> getById(@PathVariable @NotNull @NotBlank Long userId, Principal principal) {
        return ResponseEntity.ok(userService.getById(userId));
    }


    //  Update record
    @PutMapping("/{userId}")
    public ResponseEntity<Void> update(@PathVariable Long userId, @RequestBody UserDTO userDTO, Principal principal){
        // UserDTO updatedUserDTO = userService.getByIdAndOwner(userId, userDTO ,principal.getName());
        
        userService.update(userId, userDTO);
        return ResponseEntity.noContent().build();

        // UserDTO updatedUserDTO = userService.getById(userId);
        // if(updatedUserDTO!=null){
        //     userDTO.setId(updatedUserDTO.getId());
        //     return ResponseEntity.created(userService.update(userDTO)).build();
        // }else{
        //     return ResponseEntity.notFound().build();
        // }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity delete(@PathVariable @NotNull @NotBlank Long userId, Principal principal){
      userService.deleteById(userId, principal);
      return ResponseEntity.noContent().build();
    }    

}
`;
    createFile(`${controllerPath}`, `UserController.java`, injectedContent);
    // console.log('AuthenticationController file created!');
    // console.log('UserController file created!');

    // @RequestMapping("${ConfigObjects['webAccessPath'] + ConfigObjects['artifactId']
    injectedContent = `package ${controllerPackageName};

import ${modelPackageName}.RoleDTO;
import ${baseServicePackageName}.RoleService;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/roles")
@RequiredArgsConstructor
public class RoleController {

    public static final String ROLE_PATH = "${ConfigObjects['webAccessPath']
        }/roles";
    public static final String ROLE_PATH_ID = ROLE_PATH + "/{roleId}";

    private final RoleService roleService;

    //  List Roles
    @GetMapping("")
    public ResponseEntity<Map<String, Object>> getAll(Pageable pageable, Principal principal){
        System.out.println(principal);
        System.out.println(principal.getName());
//        SecurityContext securityContext = SecurityContextHolder.getContext();
        return ResponseEntity.ok().body(roleService.getAll(pageable, principal));
    }

    //  Get User
    @GetMapping("/{roleId}")
    public ResponseEntity<RoleDTO> getById(@PathVariable @NotNull @NotBlank Long roleId, Principal principal) {
        return ResponseEntity.ok(roleService.getById(roleId));
    }

    //  Create User
    @PostMapping("/")
    public ResponseEntity<Void> create(@Validated @RequestBody RoleDTO roleDTO){
        return ResponseEntity.created(roleService.create(roleDTO)).build();
    }

    //  Update record
    @PutMapping("/{roleId}")
    public ResponseEntity<Void> update(@PathVariable Long roleId, @RequestBody RoleDTO roleDTO, Principal principal){
        // RoleDTO updatedUserDTO = roleService.getByIdAndOwner(roleId, roleDTO ,principal.getName());
        RoleDTO updatedUserDTO = roleService.getById(roleId);
        if(updatedUserDTO!=null){
            roleDTO.setId(updatedUserDTO.getId());
            return ResponseEntity.created(roleService.create(roleDTO)).build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
`;
    createFile(`${controllerPath}`, `RoleController.java`, injectedContent);
    /********************************************************************************
     *                        Entity package
     ********************************************************************************/
    injectedContent = `package ${entityPackageName};

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(schema ="${defaultDataSourceSchema}" ,name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @NotBlank
    @Size(max = 50)
    @Column(length = 50)
    private String firstName;
    
    @NotNull
    @NotBlank
    @Size(max = 50)             //  JAVA JSR-330        Entity validation   jakarta.validation.constraints
//    @Length(max = 50)           //  Hibernate                               org.hibernate.validator.constraints
    @Column(length = 50)        //  JPA Validation      Physical DB         jakarta.persistence
    private String lastName;
    
    @NotNull
    @NotBlank
    @Email
    @Size(max = 50)
    @Column(length = 50, unique = true)
    private String email;
    
    @NotNull
    @NotBlank
    @Size(max = 50)
    @Column(length = 50, unique = true)
    private String userName;

    @NotNull
    @NotBlank
    @Size(max = 80)
    @Column(length = 80)
    private String password;
    
    private String owner;
    private String telNumber;
//    @Enumerated(EnumType.STRING)
//    @ElementCollection
//    List<Role> roles;

//    Scenario 1
//    @ManyToOne(fetch = FetchType.EAGER)
//    private Role roles;

//  Scenario 2
//    @ManyToOne(fetch = FetchType.EAGER)
//    private Role roles;

//  Scenario 3
//    @ManyToMany(mappedBy = "users")
//    List<Role> roles = new ArrayList<>();

    //    Scenario 4.1
    @Builder.Default
    @JsonIgnore
    @ManyToMany
    // (cascade = CascadeType.PERSIST)
    @JoinTable(
            name="users_roles",
            schema = "${defaultDataSourceSchema}",
            joinColumns = @JoinColumn(
                    name="user_id", referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name="role_id", referencedColumnName = "id"
            )
    )
    private Set<Role> roles = new HashSet<>();

    //    Scenario 4.2
    public void addRoles(Role role){
        this.roles.add(role);
        role.getUsers().add(this);
    }
    public void removeRole(Role role){
        this.roles.remove(role);
        role.getUsers().remove(this);
    }

    //    @ManyToMany
//    @JoinTable(
//            name="users_roles",
//            schema = "${defaultDataSourceSchema}",
//            joinColumns = @JoinColumn(
//                    name="user_id", referencedColumnName = "id"
//            ),
//            inverseJoinColumns = @JoinColumn(
//                    name="role_id", referencedColumnName = "id"
//            )
//    )
//    private Set<Role> roles = new HashSet<>();
    private String date;
//    @Column(columnDefinition = "")
//    private short isAccountNonExpired;
//    @Column(columnDefinition = "")
//    private short isAccountNonLocked;
//    @Column(columnDefinition = "")
//    private short isEnabled;
//    @Column(columnDefinition = "")
//    private short isCredentialsNonExpired;










}
`;
    isPathExists(entityPath);
    createFile(`${entityPath}`, `User.java`, injectedContent);

    injectedContent = `package ${entityPackageName};


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;

import java.util.*;

//public enum Role {
//    USER,
//    ADMIN
//}
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@Table(schema ="${defaultDataSourceSchema}" ,name = "ROLE")
//@Embeddable
public class Role implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @NotBlank
    @Size(max = 50)
    private String name;

    @NotNull
    @NotBlank
    @Size(max = 100)
    private String nameFarsi;
    private String owner;

//  Scenario 1

//  Scenario 2
//    @OneToMany(mappedBy = "roles", fetch = FetchType.EAGER)
//    List<User> userList = new ArrayList<>();

//    Scenario 3
//    @ManyToMany
//    private List<User> users = new ArrayList<>();

    //    Scenario 4.1
//    @Builder.Default
//    @ManyToMany
//    @JoinTable(
//            name="users_roles",
//            schema = "${defaultDataSourceSchema}",
//            joinColumns = @JoinColumn(
//                    name="role_id", referencedColumnName = "id"
//            ),
//            inverseJoinColumns = @JoinColumn(
//                    name="user_id", referencedColumnName = "id"
//            )
//    )
//    private Set<User> users = new HashSet<>();
//     Just for test
        @ManyToMany(mappedBy = "roles")
        @JsonIgnore
        private Set<User> users = new HashSet<>();

    //    Scenario 4.2
    public void addUser(User user){
        this.users.add(user);
        user.getRoles().add(this);
    }

    public void removeUser(User user){
        this.users.remove(user);
        user.getRoles().remove(this);
    }



//    @ManyToMany(mappedBy = "roles")
//    private Set<User> users = new HashSet<>();

//    @ManyToMany
//    @JoinTable(
//            name="roles_privileges",
//            schema = "${defaultDataSourceSchema}",
//            joinColumns = @JoinColumn(
//                    name="role_id", referencedColumnName = "id"
//            ),
//            inverseJoinColumns = @JoinColumn(
//                    name="privilege_id", referencedColumnName = "id"
//            )
//    )
//    private Collection<Privilege> privileges;

    public boolean match(String name){
        return this.name.equalsIgnoreCase(name);
    }

    @Override
    public String getAuthority() {
        return this.name;
    }
}`;
    createFile(`${entityPath}`, `Role.java`, injectedContent);
    // console.log('UserEntity file created!');
    // console.log('RoleEntity file created!');

    /********************************************************************************
     *                        Exception package
     ********************************************************************************/
    injectedContent = `package ${exceptionPackageName};

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.databind.annotation.JsonTypeIdResolver;
import lombok.Data;
import org.hibernate.validator.internal.engine.path.PathImpl;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;

import jakarta.validation.ConstraintViolation;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@JsonTypeInfo(include = JsonTypeInfo.As.WRAPPER_OBJECT, use = JsonTypeInfo.Id.CUSTOM, property = "error", visible = true)
@JsonTypeIdResolver(LowerCaseClassNameResolver.class)
public class ApiError {
    private HttpStatus status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private LocalDateTime timestamp;
    private String message;
    private String debugMessage;
    private List<ApiSubError> subErrors;

    private ApiError() {
        timestamp = LocalDateTime.now();
    }

    public ApiError(HttpStatus status) {
        this();
        this.status = status;
    }

    public ApiError(HttpStatus status, Throwable ex) {
        this();
        this.status = status;
        this.message = "Unexpected error";
        this.debugMessage = ex.getLocalizedMessage();
    }

    public ApiError(HttpStatus status, String message, Throwable ex) {
        this();
        this.status = status;
        this.message = message;
        this.debugMessage = ex.getLocalizedMessage();
    }

    private void addSubError(ApiSubError subError) {
        if (subErrors == null) {
            subErrors = new ArrayList<>();
        }
        subErrors.add(subError);
    }

    private void addValidationError(String object, String field, Object rejectedValue, String message) {
        addSubError(new ApiValidationError(object, field, rejectedValue, message));
    }

    private void addValidationError(String object, String message) {
        addSubError(new ApiValidationError(object, message));
    }

    private void addValidationError(FieldError fieldError) {
        this.addValidationError(
                fieldError.getObjectName(),
                fieldError.getField(),
                fieldError.getRejectedValue(),
                fieldError.getDefaultMessage());
    }

    public void addValidationErrors(List<FieldError> fieldErrors) {
        fieldErrors.forEach(this::addValidationError);
    }

    private void addValidationError(ObjectError objectError) {
        this.addValidationError(
                objectError.getObjectName(),
                objectError.getDefaultMessage());
    }

    public void addValidationError(List<ObjectError> globalErrors) {
        globalErrors.forEach(this::addValidationError);
    }

    /**
     * Utility method for adding error of ConstraintViolation. Usually when a @Validated validation fails.
     *
     * @param cv the ConstraintViolation
     */
    private void addValidationError(ConstraintViolation<?> cv) {
        this.addValidationError(
                cv.getRootBeanClass().getSimpleName(),
                ((PathImpl) cv.getPropertyPath()).getLeafNode().asString(),
                cv.getInvalidValue(),
                cv.getMessage());
    }

    public void addValidationErrors(Set<ConstraintViolation<?>> constraintViolations) {
        constraintViolations.forEach(this::addValidationError);
    }

}
`;
    isPathExists(exceptionPath);
    createFile(`${exceptionPath}`, `ApiError.java`, injectedContent);

    injectedContent = `package ${exceptionPackageName};

public abstract class ApiSubError {
}
`;
    createFile(`${exceptionPath}`, `ApiSubError.java`, injectedContent);

    injectedContent = `package ${exceptionPackageName};

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
public class ApiValidationError extends ApiSubError {
    private String object;
    private String field;
    private Object rejectedValue;
    private String message;

    ApiValidationError(String object, String message) {
        this.object = object;
        this.message = message;
    }
}
`;
    createFile(`${exceptionPath}`, `ApiValidationError.java`, injectedContent);

    injectedContent = `package ${exceptionPackageName};

import org.apache.commons.lang3.StringUtils;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.IntStream;

public class EntityNotFoundException extends RuntimeException{
    public EntityNotFoundException(Class clazz, String... searchParamsMap) {
        super(
                EntityNotFoundException.generateMessage(
                        clazz.getSimpleName(),
                        toMap(
                                String.class,
                                String.class,
                                searchParamsMap
                        )
                )
        );
    }

    private static String generateMessage(String entity, Map<String, String> searchParams) {
        return StringUtils.capitalize(entity) +
                " was not found for parameters " +
                searchParams;
    }

    private static <K, V> Map<K, V> toMap(
            Class<K> keyType, Class<V> valueType, Object... entries) {
        if (entries.length % 2 == 1)
            throw new IllegalArgumentException("Invalid entries");
        return IntStream.range(0, entries.length / 2).map(i -> i * 2)
                .collect(HashMap::new,
                        (m, i) -> m.put(keyType.cast(entries[i]), valueType.cast(entries[i + 1])),
                        Map::putAll);
    }
}
`;
    createFile(
        `${exceptionPath}`,
        `EntityNotFoundException.java`,
        injectedContent
    );

    injectedContent = `package ${exceptionPackageName};

    import org.apache.commons.lang3.StringUtils;
    
    import java.util.HashMap;
    import java.util.Map;
    import java.util.stream.IntStream;
    
    public class SQLGrammerException extends RuntimeException{
        public SQLGrammerException(Class clazz, String... searchParamsMap) {
            super(
                SQLGrammerException.generateMessage(
                            clazz.getSimpleName(),
                            toMap(
                                    String.class,
                                    String.class,
                                    searchParamsMap
                            )
                    )
            );
        }
    
        private static String generateMessage(String entity, Map<String, String> searchParams) {
            return StringUtils.capitalize(entity) +
                    " was not found for parameters " +
                    searchParams;
        }
    
        private static <K, V> Map<K, V> toMap(
                Class<K> keyType, Class<V> valueType, Object... entries) {
            if (entries.length % 2 == 1)
                throw new IllegalArgumentException("Invalid entries");
            return IntStream.range(0, entries.length / 2).map(i -> i * 2)
                    .collect(HashMap::new,
                            (m, i) -> m.put(keyType.cast(entries[i]), valueType.cast(entries[i + 1])),
                            Map::putAll);
        }
    }
    `;
    createFile(
        `${exceptionPath}`,
        `SQLGrammerException.java`,
        injectedContent
    );

    injectedContent = `package ${exceptionPackageName};

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.databind.jsontype.impl.TypeIdResolverBase;

public class LowerCaseClassNameResolver extends TypeIdResolverBase{
    @Override
    public String idFromValue(Object value) {
        return value.getClass().getSimpleName().toLowerCase();
    }

    @Override
    public String idFromValueAndType(Object value, Class<?> suggestedType) {
        return idFromValue(value);
    }

    @Override
    public JsonTypeInfo.Id getMechanism() {
        return JsonTypeInfo.Id.CUSTOM;
    }
}
`;
    createFile(
        `${exceptionPath}`,
        `LowerCaseClassNameResolver.java`,
        injectedContent
    );

    injectedContent = `package ${exceptionPackageName};

//import com.example.springbootexceptionhandling.apierror.ApiError;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.persistence.NoResultException;
import jakarta.servlet.ServletException;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.hibernate.exception.ConstraintViolationException;
import org.hibernate.tool.schema.spi.CommandAcceptanceException;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import static org.springframework.http.HttpStatus.*;

@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
@Slf4j
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    /**
     * Handle MissingServletRequestParameterException. Triggered when a 'required' request parameter is missing.
     *
     * @param ex      MissingServletRequestParameterException
     * @param headers HttpHeaders
     * @param status  HttpStatus
     * @param request WebRequest
     * @return the ApiError object
     */
//    @Override
//    protected ResponseEntity<Object> handleMissingServletRequestParameter(
//            MissingServletRequestParameterException ex, HttpHeaders headers,
//            HttpStatus status, WebRequest request) {
//        String error = ex.getParameterName() + " parameter is missing";
//        return buildResponseEntity(new ApiError(BAD_REQUEST, error, ex));
//    }


    @Override
    protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        super.handleMissingServletRequestParameter(ex, headers, status, request);
        String error = ex.getParameterName() + " parameter is missing";
        return buildResponseEntity(new ApiError(BAD_REQUEST, error, ex));
    }

    /**
     * Handle HttpMediaTypeNotSupportedException. This one triggers when JSON is invalid as well.
     *
     * @param ex      HttpMediaTypeNotSupportedException
     * @param headers HttpHeaders
     * @param status  HttpStatus
     * @param request WebRequest
     * @return the ApiError object
     */
//    @Override
//    protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(
//            HttpMediaTypeNotSupportedException ex,
//            HttpHeaders headers,
//            HttpStatus status,
//            WebRequest request) {
//        StringBuilder builder = new StringBuilder();
//        builder.append(ex.getContentType());
//        builder.append(" media type is not supported. Supported media types are ");
//        ex.getSupportedMediaTypes().forEach(t -> builder.append(t).append(", "));
//        return buildResponseEntity(new ApiError(HttpStatus.UNSUPPORTED_MEDIA_TYPE, builder.substring(0, builder.length() - 2), ex));
//    }


    @Override
    protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(HttpMediaTypeNotSupportedException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        super.handleHttpMediaTypeNotSupported(ex, headers, status, request);
        StringBuilder builder = new StringBuilder();
        builder.append(ex.getContentType());
        builder.append(" media type is not supported. Supported media types are ");
        ex.getSupportedMediaTypes().forEach(t -> builder.append(t).append(", "));
        return buildResponseEntity(new ApiError(HttpStatus.UNSUPPORTED_MEDIA_TYPE, builder.substring(0, builder.length() - 2), ex));
    }

    /**
     * Handle MethodArgumentNotValidException. Triggered when an object fails @Valid validation.
     *
     * @param ex      the MethodArgumentNotValidException that is thrown when @Valid validation fails
     * @param headers HttpHeaders
     * @param status  HttpStatus
     * @param request WebRequest
     * @return the ApiError object
     */
//    @Override
//    protected ResponseEntity<Object> handleMethodArgumentNotValid(
//            MethodArgumentNotValidException ex,
//            HttpHeaders headers,
//            HttpStatus status,
//            WebRequest request) {
//        ApiError apiError = new ApiError(BAD_REQUEST);
//        apiError.setMessage("Validation error");
//        apiError.addValidationErrors(ex.getBindingResult().getFieldErrors());
//        apiError.addValidationError(ex.getBindingResult().getGlobalErrors());
//        return buildResponseEntity(apiError);
//    }


    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        super.handleMethodArgumentNotValid(ex, headers, status, request);
//        ex.getBindingResult().getFieldErrors();
//        ex.getAllErrors().stream()
        ApiError apiError = new ApiError(BAD_REQUEST);
        apiError.setMessage("Validation error");
        apiError.addValidationErrors(ex.getBindingResult().getFieldErrors());
        apiError.addValidationError(ex.getBindingResult().getGlobalErrors());
        return buildResponseEntity(apiError);
    }

    /**
     * Handles javax.validation.ConstraintViolationException. Thrown when @Validated fails.
     *
     * @param ex the ConstraintViolationException
     * @return the ApiError object
     */
    @ExceptionHandler(jakarta.validation.ConstraintViolationException.class)
    protected ResponseEntity<Object> handleConstraintViolation(
            jakarta.validation.ConstraintViolationException ex) {
        ApiError apiError = new ApiError(BAD_REQUEST);
        apiError.setMessage("Validation error");
        apiError.addValidationErrors(ex.getConstraintViolations());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(jakarta.persistence.EntityExistsException.class)
    protected ResponseEntity<Object> handleEntityExists(jakarta.persistence.EntityExistsException ex) {
        ApiError apiError = new ApiError(CONFLICT);
        apiError.setMessage("خطا در ثبت رکورد تکراری");
        // apiError.setMessage("Entity Already Exists");
        //  apiError.addValidationErrors();
        return buildResponseEntity(apiError);
    }
    
    /**
     * Handles EntityNotFoundException. Created to encapsulate errors with more detail than jakarta.persistence.EntityNotFoundException.
     *
     * @param ex the EntityNotFoundException
     * @return the ApiError object
     */
    @ExceptionHandler(EntityNotFoundException.class)
    protected ResponseEntity<Object> handleEntityNotFound(
            EntityNotFoundException ex) {
        ApiError apiError = new ApiError(NOT_FOUND);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }

    /**
     * Handles BadCredentialsException. Created to encapsulate errors with more detail than org.springframework.security.authentication.BadCredentialsException.
     *
     * @param ex the BadCredentialsException
     * @return the ApiError object
     */
    @ExceptionHandler(BadCredentialsException.class)
    protected ResponseEntity<Object> handleBadCredentialsException(
            BadCredentialsException ex) {
        ApiError apiError = new ApiError(FORBIDDEN);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }



    /**
     * Handle HttpMessageNotReadableException. Happens when request JSON is malformed.
     *
     * @param ex      HttpMessageNotReadableException
     * @param headers HttpHeaders
     * @param status  HttpStatus
     * @param request WebRequest
     * @return the ApiError object
     */
//    @Override
//    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
//        ServletWebRequest servletWebRequest = (ServletWebRequest) request;
//        log.info("{} to {}", servletWebRequest.getHttpMethod(), servletWebRequest.getRequest().getServletPath());
//        String error = "Malformed JSON request";
//        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, error, ex));
//    }


    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        super.handleHttpMessageNotReadable(ex, headers, status, request);
        ServletWebRequest servletWebRequest = (ServletWebRequest) request;
        log.info("{} to {}", servletWebRequest.getHttpMethod(), servletWebRequest.getRequest().getServletPath());
        String error = "Malformed JSON request";
        return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, error, ex));
    }

    /**
     * Handle HttpMessageNotWritableException.
     *
     * @param ex      HttpMessageNotWritableException
     * @param headers HttpHeaders
     * @param status  HttpStatus
     * @param request WebRequest
     * @return the ApiError object
     */
//    @Override
//    protected ResponseEntity<Object> handleHttpMessageNotWritable(HttpMessageNotWritableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
//        String error = "Error writing JSON output";
//        return buildResponseEntity(new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, error, ex));
//    }


    @Override
    protected ResponseEntity<Object> handleHttpMessageNotWritable(HttpMessageNotWritableException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        super.handleHttpMessageNotWritable(ex, headers, status, request);
        String error = "Error writing JSON output";
        return buildResponseEntity(new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, error, ex));
    }

    /**
     * Handle NoHandlerFoundException.
     *
     * @param ex
     * @param headers
     * @param status
     * @param request
     * @return
     */
//    @Override
//    protected ResponseEntity<Object> handleNoHandlerFoundException(
//            NoHandlerFoundException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
//        ApiError apiError = new ApiError(BAD_REQUEST);
//        apiError.setMessage(String.format("Could not find the %s method for URL %s", ex.getHttpMethod(), ex.getRequestURL()));
//        apiError.setDebugMessage(ex.getMessage());
//        return buildResponseEntity(apiError);
//    }


    @Override
    protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        super.handleNoHandlerFoundException(ex, headers, status, request);
        ApiError apiError = new ApiError(BAD_REQUEST);
        apiError.setMessage(String.format("Could not find the %s method for URL %s", ex.getHttpMethod(), ex.getRequestURL()));
        apiError.setDebugMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }

    /**
     * Handle jakarta.persistence.EntityNotFoundException
     */
    @ExceptionHandler(jakarta.persistence.EntityNotFoundException.class)
    protected ResponseEntity<Object> handleEntityNotFound(jakarta.persistence.EntityNotFoundException ex) {
        return buildResponseEntity(new ApiError(HttpStatus.NOT_FOUND, ex));
    }

    /**
     * Handle DataIntegrityViolationException, inspects the cause for different DB causes.
     *
     * @param ex the DataIntegrityViolationException
     * @return the ApiError object
     */
    @ExceptionHandler(DataIntegrityViolationException.class)
    protected ResponseEntity<Object> handleDataIntegrityViolation(DataIntegrityViolationException ex,
                                                                  WebRequest request) {
        ApiError apiError = new ApiError(NO_CONTENT);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);

//        if (ex.getCause() instanceof ConstraintViolationException) {
//            return buildResponseEntity(new ApiError(HttpStatus.CONFLICT, "Database error", ex.getCause()));
//        }
//        return buildResponseEntity(new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, ex));
    }

    /**
     * Handle Exception, handle generic Exception.class
     *
     * @param ex the Exception
     * @return the ApiError object
     */
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    protected ResponseEntity<Object> handleMethodArgumentTypeMismatch(MethodArgumentTypeMismatchException ex,
                                                                      WebRequest request) {
        ApiError apiError = new ApiError(BAD_REQUEST);
        apiError.setMessage(String.format("The parameter '%s' of value '%s' could not be converted to type '%s'", ex.getName(), ex.getValue(), ex.getRequiredType().getSimpleName()));
        apiError.setDebugMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }



    //  Hibernate Exceptions
    @ExceptionHandler(CommandAcceptanceException.class)
    protected ResponseEntity<Object> handleCommandAcceptanceException(
            CommandAcceptanceException ex) {
        ApiError apiError = new ApiError(BAD_REQUEST);
//        apiError.setMessage(ex.getMessage());
        apiError.setMessage("Bad Credentials");
        return buildResponseEntity(apiError);
    }

//    @ExceptionHandler(MethodNotFoundException.class)
//    protected ResponseEntity<Object> handleMethodNotFoundException(
//            MethodNotFoundException ex) {
//        ApiError apiError = new ApiError(METHOD_NOT_ALLOWED);
//        apiError.setMessage(ex.getMessage());
//        return buildResponseEntity(apiError);
//    }

    @ExceptionHandler(TransactionSystemException.class)
    ResponseEntity handleJPAViolations(TransactionSystemException exception){
        return ResponseEntity.badRequest().build();
    }

    @ExceptionHandler(ExpiredJwtException.class)
    ResponseEntity handleExpiredJwtException(Exception exception){
        return ResponseEntity.badRequest().build();
    }

    @ExceptionHandler(ServletException.class)
    ResponseEntity handleExpiredJwtException(ServletException exception){
        return ResponseEntity.badRequest().build();
    }

    @ExceptionHandler(NoResultException.class)
    protected ResponseEntity<Object> handleNoResultException(
            NoResultException ex) {
        ApiError apiError = new ApiError(NOT_FOUND);
        apiError.setMessage(ex.getMessage());
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(EmptyResultDataAccessException.class)
    protected ResponseEntity<Object> handleEmptyResultDataAccessException(
            EmptyResultDataAccessException ex) {
        ApiError apiError = new ApiError(NOT_FOUND);
        apiError.setMessage("Bad Credentials");
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(SQLGrammerException.class)
    protected ResponseEntity<Object> handleSqlGrammerException(SQLGrammerException ex) {
        ApiError apiError = new ApiError(NOT_FOUND);
        apiError.setMessage("خطا در اجرای فراخوانی اس پی");
        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(Exception.class)
    ResponseEntity handler(Exception exeption){
        return ResponseEntity.badRequest().build();
    }


    private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }


}
`;
    createFile(`${exceptionPath}`, `RestExceptionHandler.java`, injectedContent);

    injectedContent = `package ${exceptionPackageName};

    public class StorageException extends RuntimeException{
        public StorageException(String message) {
            super(message);
        }
    
        public StorageException(String message, Throwable cause) {
            super(message, cause);
        }
    }
    `
    createFile(`${exceptionPath}`, `StorageException.java`, injectedContent);

    
    injectedContent = `package ${exceptionPackageName};

    public class StorageFileNotFoundException extends StorageException{
        public StorageFileNotFoundException(String message) {
            super(message);
        }
    
        public StorageFileNotFoundException(String message, Throwable cause) {
            super(message, cause);
        }
    }
    `
    createFile(`${exceptionPath}`, `StorageFileNotFoundException.java`, injectedContent);

    // console.log('ApiError file created!');
    // console.log('ApiSubError file created!');
    // console.log('ApiValidationError file created!');
    // console.log('EntityNotFoundException file created!');
    // console.log('LowerCaseClassNameResolver file created!');
    // console.log('RestExceptionHandler file created!');

    /********************************************************************************
     *                        Model Package
     ********************************************************************************/
    injectedContent = `package ${modelPackageName};

import ${entityPackageName}.User;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

@Data
//@AllArgsConstructor
public class CustomUserDetails implements UserDetails {

    private User user;
//    private Long id;
//    private String firstName;
//    private String lastName;
//    private String email;
//    private String owner;
//    private String date;


//    private Set<Role> roleSet;

//    public void UserDetails(User user){
//        this.user = user;
////        this.id=user.getId();
////        this.firstName=user.getFirstName();
////        this.lastName=user.getLastName();
////        this.email=user.getEmail();
////        this.owner=user.getOwner();
////        this.date=user.getDate();
////        this.roleSet=user.getRoles();
//    }


    public CustomUserDetails(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

//  Solution 0
//        return List.of(new SimpleGrantedAuthority("ROLE_SUPERUSER"));
//        return List.of(new SimpleGrantedAuthority("ROLE_SUPERUSER"));
//        return List.of(new SimpleGrantedAuthority(user.getRoles().toString()));


//  Solution 1
//        roleSet = user.getRoles();


//  Solution 2
        Collection<GrantedAuthority> grantedAuthorities2 = user.getRoles()
                .stream()
                .map((role)->{
                    return new SimpleGrantedAuthority(role.getName());
                }).collect(Collectors.toList());

        return grantedAuthorities2;

//  Solution 3
//        Collection<GrantedAuthority> grantedAuthorities2 = roleSet
//                .stream()
//                .map((role)->{
//                    return new SimpleGrantedAuthority(role.getName());
//                }).collect(Collectors.toList());
//        System.out.println("nothing");
//        return grantedAuthorities2;


    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUserName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
`;
    isPathExists(modelPath);
    createFile(`${modelPath}`, `CustomUserDetails.java`, injectedContent);

    injectedContent = `package ${modelPackageName};

import ${entityPackageName}.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoleDTO {
    private Long id;
    
    @NotNull
    @NotBlank(message = "name is mandatory")
    @Size(max = 50)
    private String name;

    @NotNull
    @NotBlank(message = "name is mandatory")
    @Size(max = 100)
    private String nameFarsi;

    private Set<User> users = new HashSet<>();

}
`;
    createFile(`${modelPath}`, `RoleDTO.java`, injectedContent);

    injectedContent = `package ${modelPackageName};

//import com.behsazan.projects.mutualUnderstanding.udt.Roles;
import ${entityPackageName}.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    
    private Long id;
    
    @NotNull
    @NotBlank(message = "firstName is mandatory")
    @Size(max = 50)
    private String firstName;
    
    @NotNull
    @NotBlank(message = "lastName is mandatory")
//    @Size(max = 50)
    private String lastName;
    
    @NotNull
    @NotBlank(message = "email is mandatory")
    @Size(max = 50)
    @Email
    private String email;

    @NotNull
    @NotBlank(message = "username is mandatory")
    @Size(max = 50)
    private String userName;

    @NotNull
    @NotBlank(message = "password is mandatory")
    @Size(max = 50)
    private String password;
    
    @NotNull
    // @NotBlank(message = "role is mandatory")
    private Set<Role> roles;
    
    private String owner;
    
    private String telNumber;

//    private boolean isAccountNonExpired;
//    private boolean isAccountNonLocked;
//    private boolean isEnabled;
//    private boolean isCredentialsNonExpired;

    private String date;

//    private static final SimpleDateFormat dateFormat
//            = new SimpleDateFormat("yyyy-MM-dd HH:mm");

//    public Date getSubmissionDateConverted(String timezone) throws ParseException {
//        dateFormat.setTimeZone(TimeZone.getTimeZone(timezone));
//        return dateFormat.parse(this.date);
//    }
//
//    public void setSubmissionDate(Date date, String timezone) {
//        dateFormat.setTimeZone(TimeZone.getTimeZone(timezone));
//        this.date = dateFormat.format(date);
//    }

}
`;
    createFile(`${modelPath}`, `UserDTO.java`, injectedContent);

    injectedContent = `package ${modelPackageRequest};

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SigninRequest {
    private String email;
    private String password;
}
`;
    isPathExists(modelRequestPath);
    createFile(`${modelRequestPath}`, `SigninRequest.java`, injectedContent);

    injectedContent = `package ${modelPackageName}.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthenticationResponse {
    private String token;
    private UserDetails userDetails;
    private Long date;
    private Integer lifeLong;
}
`;
    isPathExists(modelResponsePath);
    createFile(
        `${modelResponsePath}`,
        `JwtAuthenticationResponse.java`,
        injectedContent
    );

    
    injectedContent = `package ${modelPackageName}.response;

    import lombok.AllArgsConstructor;
    import lombok.Builder;
    import lombok.Data;
    import lombok.NoArgsConstructor;
    
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public class Abc {
        private Result result;
        private Error error;
        class Result {
            private String ids;
        }
    
        class Error {
            private String GLB_ERROR;
            private String glb_ERROR;
            private String sp_STEP;
            private String msgException;
        }
    }
    `;
    isPathExists(modelResponsePath);
    createFile(
        `${modelResponsePath}`,
        `Abc.java`,
        injectedContent
    );

    // console.log('CustomUserDetails file created!');
    // console.log('RoleDTO file created!');
    // console.log('UserDTO file created!');
    // console.log('SigninRequest file created!');
    // console.log('JwtAuthenticationResponse file created!');

    /********************************************************************************
     *                        Repository package
     ********************************************************************************/
    injectedContent = `package ${repositoryPackageName};

import ${entityPackageName}.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends
        JpaRepository<User, Long>,
        PagingAndSortingRepository<User, Long>,
        CustomUserRepository {
//    Optional<User> findByEmail(String email);
    Optional<User> findByIdAndOwner(Long id, String owner);


}
`;
    isPathExists(repositoryBasePath);
    createFile(`${repositoryBasePath}`, `UserRepository.java`, injectedContent);

    injectedContent = `package ${repositoryPackageName};

import ${entityPackageName}.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long>, PagingAndSortingRepository<Role, Long> {
    Optional<Role> findByIdAndOwner(Long id, String owner);
    Role findByName(String roleName);
}
`;
    createFile(`${repositoryBasePath}`, `RoleRepository.java`, injectedContent);

    injectedContent = `package ${repositoryPackageName};

import ${entityPackageName}.User;

public interface CustomUserRepository {
    User findByUserName(String userName);
}
`;
    createFile(
        `${repositoryBasePath}`,
        `CustomUserRepository.java`,
        injectedContent
    );

    injectedContent = `package ${repositoryPackageName}.impl;

import ${entityPackageName}.User;
import ${repositoryPackageName}.CustomUserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

public class CustomUserRepositoryImpl implements CustomUserRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public User findByUserName(String userName){
        User result;
        TypedQuery<User> findUser = entityManager
                    .createQuery("SELECT u from User u JOIN FETCH u.roles WHERE u.userName = :userName" ,User.class);
            findUser.setParameter("userName", userName);
            result = findUser.getSingleResult();
        return result;
    }
}
`;
    isPathExists(repositoryImplPath);
    createFile(
        `${repositoryImplPath}`,
        `CustomUserRepositoryImpl.java`,
        injectedContent
    );

    // console.log('UserRepository file created!');
    // console.log('RoleRepository file created!');
    // console.log('CustomUserRepository file created!');
    // console.log('CustomUserRepositoryImpl file created!');

    /********************************************************************************
     *                        BaseService package
     ********************************************************************************/
    injectedContent = `package ${baseServicePackageName};

import ${modelPackageName}.UserDTO;
import org.springframework.data.domain.Pageable;

import java.net.URI;
import java.security.Principal;
import java.util.Map;

public interface UserService {
    Map<String, Object> getAll(Pageable pageable, Principal principal);
    UserDTO getById(Long id);
    UserDTO getByUserName(String userName);
    URI create(UserDTO user);
    URI update(Long userId, UserDTO user);
    UserDTO getByIdAndOwner(Long id, UserDTO userDTO, String owner);
    void deleteById(Long userId, Principal principal);
}
`;
    isPathExists(serviceBasePath);
    createFile(`${serviceBasePath}`, `UserService.java`, injectedContent);
    // console.log('UserService file created!');

    injectedContent = `package ${baseServicePackageName};

import ${modelPackageName}.RoleDTO;
import org.springframework.data.domain.Pageable;

import java.net.URI;
import java.security.Principal;
import java.util.Map;

public interface RoleService {
    Map<String, Object> getAll(Pageable pageable, Principal principal);
    RoleDTO getById(Long id);
    RoleDTO getByName(String email);
    URI create(RoleDTO role);
    RoleDTO getByIdAndOwner(Long id, RoleDTO roleDTO, String owner);

}
`;
    isPathExists(serviceBasePath);
    createFile(`${serviceBasePath}`, `RoleService.java`, injectedContent);

    /********************************************************************************
     *                        Service Logic package
     ********************************************************************************/
    injectedContent = `package ${baseServicePackageName};

import org.springframework.security.core.userdetails.UserDetails;

public interface JwtService {
    String extractUserName(String token);

    String generateToken(UserDetails userDetails);

    boolean isTokenValid(String token, UserDetails userDetails);
}
`;
    createFile(`${serviceBasePath}`, `JwtService.java`, injectedContent);

    injectedContent = `package ${baseServicePackageName};


import ${modelPackageRequest}.SigninRequest;
import ${modelPackageResponse}.JwtAuthenticationResponse;
import ${modelPackageName}.UserDTO;

import java.net.URI;

public interface AuthenticationService {
//    JwtAuthenticationResponse signup(SignUpRequest request);

    URI signup(UserDTO userDTO);

    JwtAuthenticationResponse signin(SigninRequest request);
}
`;
    createFile(
        `${serviceBasePath}`,
        `AuthenticationService.java`,
        injectedContent
    );

    injectedContent = `package ${baseServicePackageName}.logic;

import ${entityPackageName}.Role;
import ${entityPackageName}.User;
import ${modelPackageName}.UserDTO;
import ${repositoryPackageName}.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserLogic {

    // private final PasswordEncoder passwordEncoder;

    private final RoleRepository roleRepository;

    public UserDTO convertToDto(User user) {
        //                .isAccountNonLocked(user.isAccountNonLocked())
        //                .isAccountNonExpired(user.isAccountNonExpired())
        //                .isCredentialsNonExpired(user.isCredentialsNonExpired())
        //                .isEnabled(user.isEnabled())
        UserDTO userDTO = UserDTO.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .roles(user.getRoles())
                .userName(user.getUserName())
                .password(user.getPassword())
                .owner(user.getOwner())
                .telNumber(user.getTelNumber())
//                .isAccountNonLocked(user.isAccountNonLocked())
//                .isAccountNonExpired(user.isAccountNonExpired())
//                .isCredentialsNonExpired(user.isCredentialsNonExpired())
//                .isEnabled(user.isEnabled())
                .date(user.getDate())
                .build();
        return userDTO;
    }

    public User convertToEntity(UserDTO userDTO){
//        dateFormat.setTimeZone(TimeZone.getTimeZone(timezone));
        Locale locale = new Locale("ir","IR");
        DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.DEFAULT, locale);
        DateFormat timeFormat = DateFormat.getTimeInstance(DateFormat.DEFAULT, locale);
        String date = dateFormat.format(new Date());
        String time = timeFormat.format(new Date());

        List<Role> savedRoles = roleRepository.findAll();
        Collection<Role> result= new ArrayList<>();

        for(Role userRole : userDTO.getRoles()){
            for(Role savedRole : savedRoles) {
                if(savedRole.match(userRole.getName())){
                    result.add(savedRole);
                }
            }
        }

        User user = User.builder()
                .id(userDTO.getId())
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .email(userDTO.getEmail())
                .userName(userDTO.getUserName())
                // .password(passwordEncoder.encode(userDTO.getPassword()))
                .password(userDTO.getPassword())
                .roles(userDTO.getRoles())
                .owner(userDTO.getOwner())
                .telNumber(userDTO.getTelNumber())
//                .isCredentialsNonExpired(userDTO.isCredentialsNonExpired())
//                .isAccountNonExpired(userDTO.isAccountNonExpired())
//                .isAccountNonLocked(userDTO.isAccountNonLocked())
//                .isEnabled(userDTO.isEnabled())
//                .date(userDTO.getDate())
                .date(date+" "+time)
                .build();
        return user;
    }

    Map<String, Object> response = new HashMap<>();

    public Map<String, Object> generateResponse(Page<User> users){
        List<UserDTO> userDTOS = users.stream()
                .map(user -> convertToDto(user))
                .collect(Collectors.toList());
        response.put("content", userDTOS);
        response.put("currentPage", users.getNumber());
        response.put("totalItems", users.getTotalElements());
        response.put("totalPages", users.getTotalPages());

        return response;
    }
}
`;
    isPathExists(serviceLogicPatch);
    createFile(`${serviceLogicPatch}`, `UserLogic.java`, injectedContent);

    injectedContent = `package ${baseServicePackageName}.logic;

import ${entityPackageName}.Role;
import ${modelPackageName}.RoleDTO;
import ${repositoryPackageName}.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoleLogic {

    private final PasswordEncoder passwordEncoder;

    private final RoleRepository roleRepository;

    Map<String, Object> response = new HashMap<>();

    public RoleDTO convertToDto(Role role) {
        RoleDTO roleDTO = RoleDTO.builder()
                .id(role.getId())
                .name(role.getName())
                .nameFarsi(role.getNameFarsi())
                .build();
        return roleDTO;
    }
    
    public Role convertToEntity(RoleDTO roleDTO){
//        dateFormat.setTimeZone(TimeZone.getTimeZone(timezone));
        Locale locale = new Locale("ir","IR");
        DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.DEFAULT, locale);
        DateFormat timeFormat = DateFormat.getTimeInstance(DateFormat.DEFAULT, locale);
        String date = dateFormat.format(new Date());
        String time = timeFormat.format(new Date());

        List<Role> savedRoles = roleRepository.findAll();
        Collection<Role> result= new ArrayList<>();

//        for(Role userRole : roleDTO.getRoles()){
//            for(Role savedRole : savedRoles) {
//                if(savedRole.match(userRole.getName())){
//                    result.add(savedRole);
//                }
//            }
//        }

        Role role = Role.builder()
                .id(roleDTO.getId())
                .name(roleDTO.getName())
                .nameFarsi(roleDTO.getNameFarsi())
                .users(roleDTO.getUsers())
//                .owner(roleDTO.getOwner())
                .build();
        return role;
    }

    public Map<String, Object> generateResponse(Page<Role> roles){
        List<RoleDTO> roleDTOS = roles.stream()
                .map(role -> convertToDto(role))
                .collect(Collectors.toList());
        response.put("content", roleDTOS);
        response.put("currentPage", roles.getNumber());
        response.put("totalItems", roles.getTotalElements());
        response.put("totalPages", roles.getTotalPages());

        return response;
    }
}
`;
    isPathExists(serviceLogicPatch);
    createFile(`${serviceLogicPatch}`, `RoleLogic.java`, injectedContent);

    /********************************************************************************
     *                        Service impl package
     ********************************************************************************/
    injectedContent = `package ${baseServicePackageName}.impl;

import ${entityPackageName}.User;
import ${exceptionPackageName}.EntityNotFoundException;
import ${modelPackageName}.UserDTO;
import ${repositoryPackageName}.UserRepository;
import ${baseServicePackageName}.UserService;
import ${baseServicePackageName}.logic.UserLogic;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.net.URI;
import java.security.Principal;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
//    @Autowired
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserLogic userLogic;

    @Override
    public Map<String, Object> getAll(Pageable pageable, Principal principal){
        Page<User> users = userRepository.findAll(pageable);
        Map<String, Object> response = userLogic.generateResponse(users);
        return response;
    }


    @Override
    public UserDTO getById(Long id) {
            User user = userRepository.findById(id).orElseThrow(()->new EntityNotFoundException(User.class,"Id",id.toString()));
            return userLogic.convertToDto(user);
    }

    @Override
    public UserDTO getByIdAndOwner(Long id, UserDTO userDTO, String owner) {
        User findUser = userRepository.findByIdAndOwner(id, owner).orElseThrow(()->new EntityNotFoundException(User.class,"Id",id.toString()));
        if(findUser != null){
            //  NO previous user, try to save NEW user
            User updatedUser = User.builder()
                    .id(findUser.getId())
                    .firstName(userDTO.getFirstName())
                    .lastName(userDTO.getLastName())
                    .email(userDTO.getEmail())
                    .password(userDTO.getPassword())
                    .roles(userDTO.getRoles())
                    .build();
            User savedUser = userRepository.save(updatedUser);
            return userLogic.convertToDto(savedUser);
        }else{
            return null;
        }
    }

    @Override
    public UserDTO getByUserName(String userName) {
        User user = userRepository.findByUserName(userName);
        return userLogic.convertToDto(user);
    }

    @Override
    public URI create(UserDTO userDTO) {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        User user = userLogic.convertToEntity(userDTO);
        User savedUser = userRepository.save(user);
        userRepository.flush();
//      let jwt = jwtService.generateToken(user);
//      return JwtAuthenticationResponse.builder().token(jwt).build();
        URI locationOfNewUser = UriComponentsBuilder.newInstance()
                  .path("/api/v1/auth/users/{id}")
                  .buildAndExpand(savedUser.getId())
                    .toUri();
        return locationOfNewUser;
    }

    @Override
    public URI update(Long userId, UserDTO userDTO) {

        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException(User.class, "userId", String.valueOf(userId)));
        //  in case new password
        if(!userDTO.getPassword().equals(user.getPassword())){
            userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        }

        User newUser = userLogic.convertToEntity(userDTO);

        user.setFirstName(newUser.getFirstName());
        user.setLastName(newUser.getLastName());
        user.setUserName(newUser.getUserName());
        user.setPassword(newUser.getPassword());
        user.setTelNumber(newUser.getTelNumber());
        user.setEmail(newUser.getEmail());
        user.setDate(newUser.getDate());
        user.setRoles(newUser.getRoles());

        User savedUser = userRepository.save(user);
    
    
        // userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        // User user = userLogic.convertToEntity(userDTO);
        // User savedUser = userRepository.save(user);
        // userRepository.flush();
        
//      let jwt = jwtService.generateToken(user);
//      return JwtAuthenticationResponse.builder().token(jwt).build();
        URI locationOfNewUser = UriComponentsBuilder.newInstance()
                    .path("users/{id}")
                    .buildAndExpand(savedUser.getId())
                    .toUri();
        return locationOfNewUser;
    }
    //    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<Users> user = usersRepository.findByEmail(username);
//        if(user == null){
//            throw new UsernameNotFoundException(username);
//        }
//        return new MyUserPrincipal(user);
//    }

    public void deleteById(Long userId, Principal principal){
        userRepository.deleteById(userId);
    }
}`;
    isPathExists(serviceImplPatch);
    createFile(`${serviceImplPatch}`, `UserServiceImpl.java`, injectedContent);

    injectedContent = `package ${baseServicePackageName}.impl;

import ${entityPackageName}.Role;
import ${exceptionPackageName}.EntityNotFoundException;
import ${modelPackageName}.RoleDTO;
import ${repositoryPackageName}.RoleRepository;
import ${baseServicePackageName}.RoleService;
import ${baseServicePackageName}.logic.RoleLogic;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.security.Principal;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {
//    @Autowired
    private final RoleRepository roleRepository;

    private final RoleLogic roleLogic;

    @Override
    public Map<String, Object> getAll(Pageable pageable, Principal principal){
        Page<Role> roles = roleRepository.findAll(pageable);
        Map<String, Object> response = roleLogic.generateResponse(roles);
        return response;
    }

        @Override
    public RoleDTO getById(Long id) {
            Role role = roleRepository.findById(id).orElseThrow(()->new EntityNotFoundException(Role.class,"Id",id.toString()));
            return roleLogic.convertToDto(role);
    }

    @Override
    public RoleDTO getByIdAndOwner(Long id, RoleDTO roleDTO, String owner) {
        Role findRole = roleRepository.findByIdAndOwner(id, owner).orElseThrow(()->new EntityNotFoundException(Role.class,"Id",id.toString()));
        if(findRole != null){
            //  NO previous role, try to save NEW role
            Role updatedRole = Role.builder()
                    .id(findRole.getId())
                    .name(roleDTO.getName())
                    .nameFarsi(roleDTO.getNameFarsi())
                    .users(roleDTO.getUsers())
                    .build();
            Role savedRole = roleRepository.save(updatedRole);
            return roleLogic.convertToDto(savedRole);
        }else{
            return null;
        }
    }

    @Override
    public RoleDTO getByName(String roleName) {
        Role role = roleRepository.findByName(roleName);
        return roleLogic.convertToDto(role);
    }

    @Override
    public URI create(RoleDTO roleDTO) {
            Role role = roleLogic.convertToEntity(roleDTO);
            Role savedRole = roleRepository.save(role);
            roleRepository.flush();
//        let jwt = jwtService.generateToken(role);
//        return JwtAuthenticationResponse.builder().token(jwt).build();
            URI locationOfNewRole = UriComponentsBuilder.newInstance()
                    .path("/api/v1/auth/roles/{id}")
                    .buildAndExpand(savedRole.getId())
                    .toUri();
            return locationOfNewRole;
    }

    //    @Override
//    public UserDetails loadRoleByRoleName(String roleName) throws UsernameNotFoundException {
//        Optional<Roles> role = rolesRepository.findByEmail(roleName);
//        if(role == null){
//            throw new UsernameNotFoundException(username);
//        }
//        return new MyUserPrincipal(role);
//    }

}
`;
    isPathExists(serviceImplPatch);
    createFile(`${serviceImplPatch}`, `RoleServiceImpl.java`, injectedContent);

    injectedContent = `package ${baseServicePackageName}.impl;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import ${baseServicePackageName}.JwtService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtServiceImpl implements JwtService {
    //  Actual key from allkeysgenerator.com
    @Value("\${token.signing.key}")
    private String jwtSigningKey;

    @Value("\${token.life.long}")
    private Integer jwtLifeLong;

    @Override
    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolvers) {
        final Claims claims = extractAllClaims(token);
        return claimsResolvers.apply(claims);
    }

    @Override
    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    private String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
//        String stre = userDetails.getUsername()+' '+userDetails.getAuthorities().toString();
//        return Jwts.builder().setClaims(extraClaims).setSubject(stre)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtLifeLong))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256).compact();
//        60 * 60
//         * 24 * 365
    }

    @Override
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String userName = extractUserName(token);
        return (userName.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }


    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    //  Signing key:
    //  is a secret that is used to sign the jwt token
    //  is used to create "Signature" part of jwt which is used to:
    //      1. verify that the sender of the jwt is who it claims to be and
    //      2. ensures that the message wasn't changed along the way
    //  the specified Signing Algorithm and Key size is depends on the requirement of your application and level of trust you have in signing party
    //  "Signing Key" is used in conjunction with the "Signing Algorithm" specified in jwt header to create the signature
    private Key getSigningKey() {
        //  decode key
        byte[] keyBytes = Decoders.BASE64.decode(jwtSigningKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
`;
    createFile(`${serviceImplPatch}`, `JwtServiceImpl.java`, injectedContent);

    injectedContent = `package ${baseServicePackageName}.impl;

import ${entityPackageName}.User;
import ${modelPackageName}.CustomUserDetails;
import ${repositoryPackageName}.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


//        User user = entityManager.find(User.class,1L);
//        User user = userRepository.findByUserName(username).orElseThrow(()->new UsernameNotFoundException("users NOT found"));
        User user=null;
        try {
            user = userRepository.findByUserName(username);
        }catch (Exception e){
            System.out.println(e);
        }


        return new CustomUserDetails(user);
    }

    public List<User> findAllEntities(){

        TypedQuery<User> typedQuery = entityManager.createQuery("select u from User u",User.class);

        List<User> userList = typedQuery.getResultList();
        return userList;
    }
}
`;
    createFile(
        `${serviceImplPatch}`,
        `CustomUserDetailsService.java`,
        injectedContent
    );

    injectedContent = `package ${baseServicePackageName}.impl;

import ${exceptionPackageName}.EntityNotFoundException;
import ${modelPackageName}.CustomUserDetails;
import ${modelPackageRequest}.SigninRequest;
import ${modelPackageResponse}.JwtAuthenticationResponse;
import ${entityPackageName}.User;
import ${baseServicePackageName}.logic.UserLogic;
import ${modelPackageName}.UserDTO;
import ${repositoryPackageName}.UserRepository;
import ${baseServicePackageName}.AuthenticationService;
import ${baseServicePackageName}.JwtService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import lombok.RequiredArgsConstructor;

import java.net.URI;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    
    private final AuthenticationManager authenticationManager;
    
    private final UserRepository userRepository;
    
    private final JwtService jwtService;
    
    @Value("\${token.life.long}")
    private Integer jwtLifeLong;

    private final UserLogic userLogic;
    @Override
    public URI signup(UserDTO userDTO) {
        //  Check for existing credential
        //  NO previous user, try to save NEW user
        // TODO
        //  partial update

        User user = userLogic.convertToEntity(userDTO);
        User savedUser = userRepository.save(user);
//        let jwt = jwtService.generateToken(user);
//        return JwtAuthenticationResponse.builder().token(jwt).build();
        URI locationOfNewUser = UriComponentsBuilder.newInstance()
                .path("/api/v1/auth/users/{id}")
                .buildAndExpand(savedUser.getId())
                .toUri();
        return locationOfNewUser;
    }

    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) throws EntityNotFoundException{
        Authentication auth = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        UserDetails userDetails = (UserDetails)auth.getPrincipal();

        // User user=null;
        // user = getValidUser(request.getEmail());
        // UserDetails myUsersDetails = new CustomUserDetails(user);
        // let jwt = jwtService.generateToken(myUsersDetails);
        
        // let jwt = jwtService.generateToken(userDetails);
        return JwtAuthenticationResponse
            .builder()
            .token(jwtService.generateToken(userDetails))
            .userDetails(userDetails)
            .date(System.currentTimeMillis())
            .lifeLong(jwtLifeLong)
            .build();
    }

    public User getValidUser(String userName){
        User user;
        user = userRepository.findByUserName(userName);
        return user;
    }
}
`;
    createFile(
        `${serviceImplPatch}`,
        `AuthenticationServiceImpl.java`,
        injectedContent
    );

    /********************************************************************************
     *                        project test package
     ********************************************************************************/
    injectedContent = `package ${controllerPackageName};
import ${modelPackageName}.request.SigninRequest;
import ${entityPackageName}.User;
import ${entityPackageName}.Role;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import org.apache.tomcat.util.codec.binary.Base64;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AuthenticationControllerTest {

    User userWithCorrectCredential = User.builder()
            .firstName("AmirMaosoud")
            .lastName("Mojallal")
            .email("mojalal@behsazan.net")
            .password("password")
            .owner("mojalal@behsazan.net")
//            .roles(Roles.SPORT)
            .date(null)
//            .isEnabled(true)
//            .isAccountNonLocked(true)
//            .isAccountNonExpired(true)
//            .isCredentialsNonExpired(true)
            .build();

    User userWithInCorrectCredential = User.builder()
            .firstName("AmirMaosoud")
            .lastName("Mojallal")
            .email("dariushsterr@gmail.com")
            .password("password")
//            .roles(Roles.SPORT)
            .build();

    @Autowired
    TestRestTemplate restTemplate;

//    @Test
//    @BeforeAll
//    void setUp(){
//    }

    @Test
    void contextLoads() {
    }

    //  Should be first Test
    @Test
    void signUpWithCorrectCredential(){
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signup", userWithCorrectCredential, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        System.out.println("***** signUpWithCorrectCredential passed ****");
    }

    @Test
    void preventSignUpWithDuplicateCredential(){
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signup", userWithCorrectCredential, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.CONFLICT);
        System.out.println("***** shouldPreventSignUpWithDuplicateCredential is passed *****");
    }

    @Test
    void tstUserController(){

        SigninRequest signinRequest = new SigninRequest();
        signinRequest.setEmail("dariushster@gmail.com");
        signinRequest.setPassword("password");

        //  sign-in
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", signinRequest, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

        DocumentContext documentContext = JsonPath.parse(createResponse.getBody());
        String val = documentContext.read("$");
        System.out.println(val);
        System.out.println(val.substring(10,(val.length()-2)));

        //  get token and set it in Authorization header
        String plainCreds = val.substring(10,(val.length()-2));
        byte[] plainCredsBytes = plainCreds.getBytes();
        byte[] base64CredsBytes = Base64.encodeBase64(plainCredsBytes,false);
        String base64Creds = new String(base64CredsBytes);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + base64Creds);

        HttpEntity<String> request = new HttpEntity<String>(headers);
        ResponseEntity<String> response = restTemplate.exchange("/api/v1/auth/getUser", HttpMethod.GET, request, String.class);
        String str = response.getBody();
        System.out.println(str);
    }

    @Test
    void preventSignInInWithIncorrectCredential(){
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", userWithInCorrectCredential, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.FORBIDDEN);
        System.out.println("***** preventSignInInWithIncorrectCredential is saved ****");
    }

    @Test
    void signInWithCorrectCredential(){

        SigninRequest signinRequest = new SigninRequest();
        signinRequest.setEmail("dariushster@gmail.com");
        signinRequest.setPassword("password");

        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", signinRequest, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

        DocumentContext documentContext = JsonPath.parse(createResponse.getBody());
        String val = documentContext.read("$");

    }

}
`;
    isPathExists(testControllerPath + '\\');
    createFile(
        `${testControllerPath}`,
        `AuthenticationControllerTest.java`,
        injectedContent
    );

    injectedContent = `package ${controllerPackageName};

import ${entityPackageName}.User;
import ${entityPackageName}.Role;
import ${repositoryPackageName}.UserRepository;
import ${repositoryPackageName}.RoleRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.HashSet;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
public class UserControllerIT {
    @Autowired
    UserController userController;

    @Autowired
    UserRepository userRepository;
    
    @Autowired
    RoleRepository roleRepository;

//    @Autowired
//    userMapper userMapper;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    WebApplicationContext wac;

    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    @Test
    void initiateRoleTable() throws Exception {
        
        List<Role> roleList = new ArrayList<Role>();
        ${listOfRoleNames}
        roleList.add(
            Role.builder()
                    .id(100L)
                    .name("ROLE_USER")
                    .nameFarsi("کاربران")
                    .owner("owner")
                    .build()
        );

        roleRepository.saveAll(roleList); 
    }

    @Test
    void initiateUserTable() throws Exception {

        Set<Role> roleList = new HashSet<Role>(roleRepository.findAll());

        User user = User.builder()
                .id(1L)
                .firstName("${superUser['firstName']}")
                .lastName("${superUser['lastName']}")
                .email("${superUser['email']}")
                .date("${superUser['date']}")
                .owner("${superUser['owner']}")
                .userName("${superUser['username']}")
                .password("${superUser['password']}")
                .telNumber("${superUser['telNumber']}")
                .roles(roleList)
                .build();
        userRepository.save(user);
    }

    @Test
    void testPatchUSerBadName() throws Exception {
        User user = userRepository.findAll().get(0);
        System.out.println(user);

        Map<String, Object> userMap = new HashMap<>();
        userMap.put("userName", "New Name 1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890");

        mockMvc.perform(patch(UserController.USER_PATH_ID, user.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(userMap)))
                .andExpect(status().isBadRequest());

    }



}
`;
    createFile(`${testControllerPath}`, `UserControllerIT.java`, injectedContent);

    injectedContent = `package ${controllerPackageName};

import ${modelPackageName}.request.SigninRequest;
import ${entityPackageName}.User;
import ${modelPackageName}.UserDTO;
import ${baseServicePackageName}.impl.UserServiceImpl;
// import ${ConfigObjects['packageName']}.${ConfigObjects['artifactId']}.udt.Roles;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.*;

import net.minidev.json.JSONArray;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.core.Is.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;


import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//@DirtiesContext(classMode = ClassMode.AFTER_EACH_TEST_METHOD)
public class UserControllerTest {

    User userWithCorrectCredential = User.builder()
            .firstName("AmirMaosoudd")
            .lastName("Mojallal")
            .email("mojalalkk@behsazan.net")
            .password("password")
//            .roles(Roles.TECHNOLOGY)
            .build();

    User userWithEmptyLastName = User.builder()
            .firstName("AmirMaosoudd")
//            .lastName("Mojallal")
            .email("mojalal@behsazan.net")
            .password("password")
//            .roles(Roles.TECHNOLOGY)
            .build();

    User userWithTooLongLastName = User.builder()
            .firstName("AmirMaosoudd")
            .lastName("MojallalMojallalMojallalMojallalMojallalMojallalMojallalMojallal")
            .email("mojalal@behsazan.net")
            .password("password")
//            .roles(Roles.TECHNOLOGY)
            .build();

    User userWithInCorrectCredential = User.builder()
            .firstName("AmirMaosoud")
            .lastName("Mojallal")
            .email("mojalal@behsazan.net")
            .password("password")
//            .roles(Roles.SPORT)
            .build();

    @Autowired
    TestRestTemplate restTemplate;

    @Autowired
    WebApplicationContext webApplicationContext;

    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    UserServiceImpl userServiceImpl;
    @BeforeEach
    void Setup(){
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
//    @DirtiesContext
    void getAllUsers(){
        SigninRequest signinRequest = new SigninRequest();
        signinRequest.setEmail("mojalal@behsazan.net");
        signinRequest.setPassword("password");

        //  Sign-in
        System.out.println("send Sign-in request");
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", signinRequest, String.class);
        System.out.println("Sign-in with response Status: OK");
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

        //  get token
        DocumentContext documentContext = JsonPath.parse(createResponse.getBody());
        String val = documentContext.read("$");
        String plainCreds = val.substring(10,(val.length()-2));

        // set token in Authorization header of Http Request
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + plainCreds);

        HttpEntity<String> request = new HttpEntity<String>(headers);
//        restTemplate.exchange("",HttpMethod.GET,request,String.class);

        //  send actual GET Request
        System.out.println("request getAllUser() resource");
        ResponseEntity<String> response = restTemplate.exchange("/api/v1/user",HttpMethod.GET,request,String.class);
//                ("/api/v1/user", HttpMethod.GET, request, Users[].class);
        System.out.println("getAllUser() response Status: OK");
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        documentContext = JsonPath.parse(response.getBody());

        System.out.println(documentContext.read("$").toString());

        System.out.println("Check getAllUser() response size");
        int usersCount = documentContext.read("$.length()");
        assertThat(usersCount).isEqualTo(1);

        System.out.println("Check existence of id: 1");
        JSONArray ids = documentContext.read("$..id");
        assertThat(ids).containsExactlyInAnyOrder(1);

//        JSONArray usernames = documentContext.read("$..first_name");
//        assertThat(usernames).containsAnyOf("AmirMaosoud");
        System.out.println("Check existence of email: mojalal@behsazan.net");
        JSONArray emails = documentContext.read("$..email");
        assertThat(emails).containsAnyOf("mojalal@behsazan.net");

        JSONArray jsa = documentContext.read("$.*");
        System.out.println(jsa);
//        System.out.println(ids);
//        JsonArray a = [3];
//        assertThat(ids).containsExactlyInAnyOrder(2);

//        Users[] usersArray = response.getBody();
//        System.out.println(Arrays.stream(usersArray)
//                .map(Users::getFirstName)
//                .collect(Collectors.toList()));
    }

    @Test
    void getOneUserByEmail(){
        SigninRequest signinRequest = new SigninRequest();
        signinRequest.setEmail("mojalal@behsazan.net");
        signinRequest.setPassword("password");

        //  Sign-in
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", signinRequest, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

        DocumentContext documentContext = JsonPath.parse(createResponse.getBody());
        String val = documentContext.read("$");

        //  get token
        String plainCreds = val.substring(10,(val.length()-2));

        // set token in Authorization header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + plainCreds);

        HttpEntity<String> request = new HttpEntity<String>(headers);
        ResponseEntity<String> response = restTemplate.exchange("/api/v1/user/mojalal@behsazan.net",HttpMethod.GET,request,String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

        System.out.println(response.getBody());

        documentContext = JsonPath.parse(response.getBody());
//        JSONArray all = documentContext.read("$.*");
//        System.out.println(all);
        String usersCount = documentContext.read("$.email");
        assertThat(usersCount).isEqualTo("mojalal@behsazan.net");
    }

    @Test
    void createUserWithCorrectCredential(){
        SigninRequest signinRequest = new SigninRequest();
        signinRequest.setEmail("mojalal@behsazan.net");
        signinRequest.setPassword("password");

        //  Sign-in
        System.out.println("** A **");
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", signinRequest, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

        DocumentContext documentContext = JsonPath.parse(createResponse.getBody());
        String val = documentContext.read("$");
        System.out.println("** B **");

        //  get token
        String plainCreds = val.substring(10,(val.length()-2));
        System.out.println(plainCreds);

        // set token in Authorization header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + plainCreds);

        HttpEntity<User> request = new HttpEntity<User>(userWithCorrectCredential, headers);
        ResponseEntity<String> response = restTemplate.exchange("/api/v1/user",HttpMethod.POST,request,String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        System.out.println("response.getBody()");
        URI location = response.getHeaders().getLocation();
        System.out.println(location);
        ResponseEntity<String> respons = restTemplate.getForEntity(location,String.class);
        System.out.println(respons);


//        documentContext = JsonPath.parse(response.getBody());
//        String usersCount = documentContext.read("$.email");
//        assertThat(usersCount).isEqualTo("mojalal@behsazan.net");
    }

    @Test
    void createUserWithInCorrectCredential(){

    }

    @Test
    void createUserNullLastName(){
        User emptyUser = User.builder().build();

        SigninRequest signinRequest = new SigninRequest();
        signinRequest.setEmail("mojalal@behsazan.net");
        signinRequest.setPassword("password");

        //  Sign-in
        System.out.println("** A **");
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", signinRequest, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

        DocumentContext documentContext = JsonPath.parse(createResponse.getBody());
        String val = documentContext.read("$");
        System.out.println("** B **");

        //  get token
        String plainCreds = val.substring(10,(val.length()-2));
        System.out.println(plainCreds);

        // set token in Authorization header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + plainCreds);

        HttpEntity<User> request = new HttpEntity<User>(userWithEmptyLastName, headers);
        ResponseEntity<String> response = restTemplate.exchange("/api/v1/user",HttpMethod.POST,request,String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
        System.out.println("response.getBody()");
//        URI location = response.getHeaders().getLocation();
//        System.out.println(location);
//        ResponseEntity<String> respons = restTemplate.getForEntity(location,String.class);
//        System.out.println(respons);


    }

    @Test
    void createUserTooLongLastName(){
        User emptyUser = User.builder().build();

        SigninRequest signinRequest = new SigninRequest();
        signinRequest.setEmail("mojalal@behsazan.net");
        signinRequest.setPassword("password");

        //  Sign-in
        System.out.println("** A **");
        ResponseEntity createResponse = restTemplate.postForEntity("/api/v1/auth/signin", signinRequest, String.class);
        assertThat(createResponse.getStatusCode()).isEqualTo(HttpStatus.OK);

        DocumentContext documentContext = JsonPath.parse(createResponse.getBody());
        String val = documentContext.read("$");
        System.out.println("** B **");

        //  get token
        String plainCreds = val.substring(10,(val.length()-2));
        System.out.println(plainCreds);

        // set token in Authorization header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + plainCreds);

        HttpEntity<User> request = new HttpEntity<User>(userWithTooLongLastName, headers);
        ResponseEntity<String> response = restTemplate.exchange("/api/v1/user",HttpMethod.POST,request,String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
        System.out.println("response.getBody()");
//        URI location = response.getHeaders().getLocation();
//        System.out.println(location);
//        ResponseEntity<String> respons = restTemplate.getForEntity(location,String.class);
//        System.out.println(respons);


    }

    @Test
    void testPatchBeerBadName() throws Exception {
        User emptyUser = User.builder()
                .firstName("amir")
                .build();

        Pageable pageable = PageRequest.of(0, 10);
    //        , Sort.by(emptyUser.getFirstName())
//        UserDTO beer = userServiceImpl.getAll(pageable).get(0);
//        Object bear = userServiceImpl.getAll(pageable);
////                .get("content");
//        System.out.println(bear);
//        Map<String, Object> beerMap = new HashMap<>();
//        beerMap.put("beerName", "New Name");
//
//        mockMvc.perform(patch(UserController.USER_PATH_ID, beer.getId())
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .accept(MediaType.APPLICATION_JSON)
//                        .content(objectMapper.writeValueAsString(beerMap)))
////                .andExpect(status().isNoContent());
//                .andExpect(status().isBadRequest());

//        MOckito
//        verify(userService).patchBeerById(uuidArgumentCaptor.capture(), beerArgumentCaptor.capture());
//        assertThat(beer.getId()).isEqualTo(uuidArgumentCaptor.getValue());
//        assertThat(beerMap.get("beerName")).isEqualTo(beerArgumentCaptor.getValue().getBeerName());

    }
}
`;
    createFile(
        `${testControllerPath}`,
        `UserControllerTest.java`,
        injectedContent
    );
};

module.exports = ConfigGenerator;
