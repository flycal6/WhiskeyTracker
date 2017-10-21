package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Scotch;

@Transactional
@Repository
public class ScotchDAOImpl implements ScotchDAO {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Scotch> index() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Scotch show(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Scotch create(String ScotchJSON) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Scotch update(int id, String ScotchJSON) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean destroy(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
