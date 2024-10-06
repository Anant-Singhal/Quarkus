package org.acme.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.acme.entity.Address;

@ApplicationScoped
public class AddressRepo implements PanacheRepository<Address> {
}
