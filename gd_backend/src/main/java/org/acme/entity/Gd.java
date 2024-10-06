package org.acme.entity;

import jakarta.persistence.*;

@Entity
public class Gd {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    Long id;
    String dateTime, subject, description;
    @Enumerated(EnumType.STRING)
    EntryForOfficer officer;
    @Enumerated(EnumType.STRING)
    GdType selectedGdType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public EntryForOfficer getOfficer() {
        return officer;
    }

    public void setOfficer(EntryForOfficer officer) {
        this.officer = officer;
    }

    public GdType getSelectedGdType() {
        return selectedGdType;
    }

    public void setSelectedGdType(GdType selectedGdType) {
        this.selectedGdType = selectedGdType;
    }
}
