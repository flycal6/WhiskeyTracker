package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Scotch;

@Transactional
@Repository
public class ScotchDAOImpl implements ScotchDAO {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Scotch> index() {
		String query = "SELECT s FROM Scotch s";
		return em.createQuery(query, Scotch.class).getResultList();
	}

	@Override
	public Scotch show(int id) {
		return em.find(Scotch.class, id);
	}

	@Override
	public Scotch create(String scotchJSON) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Scotch mappedScotch = mapper.readValue(scotchJSON, Scotch.class);
			em.persist(mappedScotch);
			em.flush();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Scotch update(int id, String scotchJSON) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Scotch scotchUpdate = em.find(Scotch.class, id);
			Scotch mappedScotch = mapper.readValue(scotchJSON, Scotch.class);
			
			scotchUpdate.setAge(mappedScotch.getAge());
			scotchUpdate.setName(mappedScotch.getName());
			scotchUpdate.setNotes(mappedScotch.getNotes());
			scotchUpdate.setPrice(mappedScotch.getPrice());
			scotchUpdate.setPurchasePlace(mappedScotch.getPurchasePlace());
			scotchUpdate.setTaste(mappedScotch.getTaste());
			scotchUpdate.setType(mappedScotch.getType());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public boolean destroy(int id) {
		try {
			em.remove(em.find(Scotch.class, id));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

}
