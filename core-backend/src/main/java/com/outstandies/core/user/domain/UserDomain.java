package com.outstandies.core.user.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.outstandies.core.model.Authority;
import com.outstandies.core.user.model.User;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

//@Entity
//@Table(name = "users")
//public class UserDomain implements Serializable {

//    @Id
//    @Column(name = "user_id")
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long userId;
//
//    @NotBlank
//    private String name;
//
//    @NotBlank
//    private String surname;
//
//    @NotBlank
//    private String email;
//
//    //TODO extended User model.
//    /*
//     *
//     * private UserPersonalInfo personalInfo;
//     * private UserAuthInfo authInfo;
//     * private UserEducationInfo educationInfo; ?
//     * private Profile profile;
//     * private List<Post> posts;
//     * private List<Post> likedPost;
//     *
//     */
//
//    public UserDomain() {
//    }
//
//    public UserDomain(final User user) {
//        //this.id = user.getId();
//        this.name = user.getName();
//        this.surname = user.getSurname();
//        this.email = user.getEmail();
//
//    }
//
//    public UserDomain(final Long id, final String name, final String surname, final String email) {
//        this.userId = id;
//        this.name = name;
//        this.surname = surname;
//        this.email = email;
//    }
//
//    public Long getId() {
//        return userId;
//    }
//
//    public void setId(final Long id) {
//        this.userId = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(final String name) {
//        this.name = name;
//    }
//
//    public String getSurname() {
//        return surname;
//    }
//
//    public void setSurname(final String surname) {
//        this.surname = surname;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(final String email) {
//        this.email = email;
//    }
//
//    @Override
//    public boolean equals(final Object o) {
//        if (this == o) return true;
//        if (!(o instanceof UserDomain)) return false;
//
//        UserDomain user = (UserDomain) o;
//
//        if (userId != null ? !userId.equals(user.userId) : user.userId != null) return false;
//        if (name != null ? !name.equals(user.name) : user.name != null) return false;
//        if (surname != null ? !surname.equals(user.surname) : user.surname != null) return false;
//        return email != null ? email.equals(user.email) : user.email == null;
//    }
//
//    @Override
//    public int hashCode() {
//        int result = userId != null ? userId.hashCode() : 0;
//        result = 31 * result + (name != null ? name.hashCode() : 0);
//        result = 31 * result + (surname != null ? surname.hashCode() : 0);
//        result = 31 * result + (email != null ? email.hashCode() : 0);
//        return result;
//    }
//
//    @Override
//    public String toString() {
//        return "User{" +
//                "id=" + userId +
//                ", name='" + name + '\'' +
//                ", surname='" + surname + '\'' +
//                ", email='" + email + '\'' +
//                '}';
//    }
	
	
	/**
	 * 
	 */

	@Entity
	@Table(name = "USER")
	public class UserDomain implements UserDetails, Serializable {
	  @Id
	  @Column(name = "id")
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;

	  @Column(name = "username")
	  private String username;

	  @JsonIgnore
	  @Column(name = "password")
	  private String password;

	  @Column(name = "firstname")
	  private String firstname;

	  @Column(name = "lastname")
	  private String lastname;


	  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	  @JoinTable(name = "user_authority",
	      joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
	      inverseJoinColumns = @JoinColumn(name = "authority_id", referencedColumnName = "id"))
	  private List<Authority> authorities;

	  public Long getId() {
	    return id;
	  }

	  public void setId(Long id) {
	    this.id = id;
	  }

	  public String getUsername() {
	    return username;
	  }

	  public void setUsername(String username) {
	    this.username = username;
	  }

	  public String getPassword() {
	    return password;
	  }

	  public void setPassword(String password) {
	    this.password = password;
	  }

	  public String getFirstname() {
	    return firstname;
	  }

	  public void setFirstname(String firstname) {
	    this.firstname = firstname;
	  }

	  public String getLastname() {
	    return lastname;
	  }

	  public void setLastname(String lastname) {

	    this.lastname = lastname;
	  }

	  public void setAuthorities(List<Authority> authorities) {
	    this.authorities = authorities;
	  }

	  @Override
	  public Collection<? extends GrantedAuthority> getAuthorities() {
	    return this.authorities;
	  }

	  // We can add the below fields in the users table.
	  // For now, they are hardcoded.
	  @JsonIgnore
	  @Override
	  public boolean isAccountNonExpired() {
	    return true;
	  }

	  @JsonIgnore
	  @Override
	  public boolean isAccountNonLocked() {
	    return true;
	  }

	  @JsonIgnore
	  @Override
	  public boolean isCredentialsNonExpired() {
	    return true;
	  }

	  @JsonIgnore
	  @Override
	  public boolean isEnabled() {
	    return true;
	  }

	
}
