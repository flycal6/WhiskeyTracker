package test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Scotch;

public class ScotchTest {
	private EntityManagerFactory emf = null;
	private EntityManager em = null;
	private Scotch scotch = null;
	
	
	

	@Before
	public void setup() throws Exception {
		emf = Persistence.createEntityManagerFactory("ScotchTracker");
		em = emf.createEntityManager();
		scotch = em.find(Scotch.class, 1);
	}

	@After
	public void teardown() {
		scotch = null;
		em.close();
		emf.close();
	}

	@Test
	public void test() {
		boolean bool = true;
		assertEquals(true, bool);
	}
}
