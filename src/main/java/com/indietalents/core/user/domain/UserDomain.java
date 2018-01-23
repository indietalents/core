package com.indietalents.core.user.domain;

import com.indietalents.core.user.model.User;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "users")
public class UserDomain implements Serializable {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    @NotBlank
    private String name;

    @NotBlank
    private String surname;

    @NotBlank
    private String email;

    //TODO extended User model.
    /*
     *
     * private UserPersonalInfo personalInfo;
     * private UserAuthInfo authInfo;
     * private UserEducationInfo educationInfo; ?
     * private Profile profile;
     * private List<Post> posts;
     * private List<Post> likedPost;
     *
     */

    public UserDomain() {
    }

    public UserDomain(final User user) {
        //this.id = user.getId();
        this.name = user.getName();
        this.surname = user.getSurname();
        this.email = user.getEmail();

    }

    public UserDomain(final Long id, final String name, final String surname, final String email) {
        this.userId = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    public Long getId() {
        return userId;
    }

    public void setId(final Long id) {
        this.userId = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(final String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (!(o instanceof UserDomain)) return false;

        UserDomain user = (UserDomain) o;

        if (userId != null ? !userId.equals(user.userId) : user.userId != null) return false;
        if (name != null ? !name.equals(user.name) : user.name != null) return false;
        if (surname != null ? !surname.equals(user.surname) : user.surname != null) return false;
        return email != null ? email.equals(user.email) : user.email == null;
    }

    @Override
    public int hashCode() {
        int result = userId != null ? userId.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + userId +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
