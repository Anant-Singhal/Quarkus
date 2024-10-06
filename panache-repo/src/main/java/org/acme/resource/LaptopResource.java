package org.acme.resource;

import jakarta.inject.Inject;  // Correct import for Inject
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.acme.entity.Laptop;
import org.acme.repository.LaptopRepository;

import java.net.URI;
import java.util.List;

@Path("/laptop")
public class LaptopResource {
    @Inject
    LaptopRepository laptopRepository;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllLaptops() {
        List<Laptop> laptopList = laptopRepository.listAll();
        return Response.ok(laptopList).build();
    }

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response saveLaptop(Laptop laptop) {
        laptopRepository.persist(laptop);
        if (laptopRepository.isPersistent(laptop)) {
            return Response.created(URI.create("/laptop/" + laptop.getId())).build();
        }
        return Response.status(Response.Status.BAD_REQUEST).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional

    public Response deleteLaptop(@PathParam("id") Long id) {
        boolean deleted = laptopRepository.deleteById(id);
        if (deleted) {
            return Response.noContent().build(); // 204 No Content
        }
        return Response.status(Response.Status.NOT_FOUND).build(); // 404 Not Found
    }

    @PUT
    @Path("/{id}")
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateLaptop(@PathParam("id") Long id, Laptop updatedLaptop) {
        // Retrieve the existing laptop from the database
        Laptop existingLaptop = laptopRepository.findById(id);

        if (existingLaptop == null) {
            return Response.status(Response.Status.NOT_FOUND).build(); // 404 Not Found
        }

        // Update only the non-null fields
        if (updatedLaptop.getName() != null) {
            existingLaptop.setName(updatedLaptop.getName());
        }
        if (updatedLaptop.getBrand() != null) {
            existingLaptop.setBrand(updatedLaptop.getBrand());
        }
        if (updatedLaptop.getRam() != 0) { // Assuming 0 is not a valid value for RAM
            existingLaptop.setRam(updatedLaptop.getRam());
        }
        if (updatedLaptop.getExternalStorage() != 0) { // Assuming 0 is not a valid value for external storage
            existingLaptop.setExternalStorage(updatedLaptop.getExternalStorage());
        }

        // Persist the updated entity
        laptopRepository.persist(existingLaptop);

        return Response.ok(existingLaptop).build(); // 200 OK
    }


}
