package org.acme.resource;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;
import org.acme.entity.Citizen;
import org.acme.entity.SimCard;
import org.acme.repository.SimCardRepo;
import org.acme.repository.CitizenRepo;

import java.util.ArrayList;
import java.util.List;
import org.jboss.logging.Logger;


@Path("/")
public class Resource {

    @Inject
    CitizenRepo citizenRepo;

    @Inject
    SimCardRepo simCardRepo;
        private static final Logger LOGGER = Logger.getLogger(Resource.class);

    @GET
    @Transactional
    @Path("save")
    public Response saveCitizen() {
//        Citizen c = new Citizen();
//        c.setGender("M");
//        c.setName("Mohan");
//
//        SimCard s1 = new SimCard();
//        s1.setActive(true);
//        s1.setNumber(7874L);
//        s1.setProvider("Jio");
//        s1.setCitizen(c);
//
//        SimCard s2 = new SimCard();
//        s2.setActive(true);
//        s2.setNumber(4443L);
//        s2.setProvider("Airtel");
//        s2.setCitizen(c);
//
//        SimCard s3 = new SimCard();
//        s3.setActive(true);
//        s3.setNumber(89349L);
//        s3.setProvider("Vodafone");
//        s3.setCitizen(c);
//        List<SimCard> l = new ArrayList<>() ;
//        l.add(s1);
//        l.add(s2);
//        l.add(s3);
//
//        c.setSimCards(l);
//
//        citizenRepo.persist(c);
//        if (citizenRepo.isPersistent(c)) {
//            return Response.status(Response.Status.CREATED).entity(c).build();
//        }
       // return Response.status(Response.Status.BAD_REQUEST).build();

          Citizen c = citizenRepo.findById(1L);
//        c.getSimCards().size();
//        if (c == null) {
//            LOGGER.warn("Citizen with ID 1 not found.");
//            System.out.println("AAA");
//        } else {
//            LOGGER.info("Found Citizen: " + c.getName());
//            System.out.println("ZZZ");
//        }
        return Response.status(Response.Status.CREATED).entity(c).build();
   }


}
