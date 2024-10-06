package org.acme.resource;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import org.acme.entity.Address;
import org.acme.entity.Citizen;
import org.acme.repository.AddressRepo;
import org.acme.repository.CitizenRepo;

@Path("/")
public class Resource {

    @Inject
    CitizenRepo citizenRepo;

    @Inject
    AddressRepo addressRepo;

    @GET
    @Transactional
    @Path("save")
    public Response saveCitizen() {
        Citizen c = new Citizen();
        c.setGender("M");
        c.setName("Mohan");

        Address addr = new Address();
        addr.setAadharNo(123456789L);
        addr.setCompany("xyz");
        addr.setCitizen(c);
        c.setAddress(addr);
        // Persist both the citizen and address
        citizenRepo.persist(c);

        if (addressRepo.isPersistent(addr)) {
            return Response.status(Response.Status.CREATED).entity(addr).build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();

    }


}
