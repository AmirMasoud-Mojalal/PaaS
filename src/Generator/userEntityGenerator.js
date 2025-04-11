let fs = require('fs');

const UserEntityGenerator = (dir, formObject) => {
  const actualPath = `${dir}\\${formObject['artifactId']}\\src\\main\\java\\${formObject['groupdId']}\\${formObject['artifactId']}\\entity`;
  const fields = formObject['content'];
  const rowNum = fields.length;
  let typeName = ``;

  let injectedContent = `package com.behsazan.projects.mutualUnderstanding.entity;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_user")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    private Roles roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        // email in our case
        return email;
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

  /**
   * Create Directory
   */

  if (!fs.existsSync(actualPath)) {
    fs.mkdirSync(actualPath, { recursive: true });
  }

  /**
   * Create File
   */
  fs.writeFile(
    `${actualPath}/${formObject['formIdClass']}.java`,
    injectedContent,
    function (err) {
      if (err) throw err;
      console.log('Entity file is created successfully.');
    }
  );
};

module.exports = UserEntityGenerator;
