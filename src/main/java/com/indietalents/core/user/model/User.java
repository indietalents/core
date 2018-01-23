package com.indietalents.core.user.model;
import com.indietalents.core.user.domain.UserDomain;

import java.io.Serializable;

public class User implements Serializable {

    private Long id;

    private String name;

    private String surname;

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

    public User() {
    }

    public User(final UserDomain userDomain) {
        this.id = userDomain.getId();
        this.name = userDomain.getName();
        this.surname = userDomain.getSurname();
        this.email = userDomain.getEmail();
    }

    public User(final Long id, final String name, final String surname, final String email) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
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
        if (!(o instanceof User)) return false;

        User user = (User) o;

        if (id != null ? !id.equals(user.id) : user.id != null) return false;
        if (name != null ? !name.equals(user.name) : user.name != null) return false;
        if (surname != null ? !surname.equals(user.surname) : user.surname != null) return false;
        return email != null ? email.equals(user.email) : user.email == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
