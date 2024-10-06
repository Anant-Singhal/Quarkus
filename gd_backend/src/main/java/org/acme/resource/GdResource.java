package org.acme.resource;

import io.quarkus.hibernate.orm.panache.PanacheQuery;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

import org.acme.entity.Gd;
import org.acme.repository.GdRepo;


import org.jboss.logging.Logger;

import java.util.ArrayList;
import java.util.List;


@Path("/")
public class GdResource {

    @Inject
    GdRepo gdRepo;

    @POST
    @Transactional
    @Path("save")
    public Response saveGd(Gd gd) {
        gdRepo.persist(gd);
        if(gdRepo.isPersistent(gd))
        {
            return Response.status(Response.Status.CREATED).build();
        }
        return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
    }

    @GET
    @Path("fetch")
    public Response getAllGd()
    {
        PanacheQuery<Gd> all = gdRepo.findAll();
        List<Gd> list = all.list();
        return Response.status(Response.Status.OK).entity(list).build();

    }
}
