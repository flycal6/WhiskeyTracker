package data;

import java.util.Collection;

import entities.Scotch;

public interface ScotchDAO {
	public Collection<Scotch> index();
	public Scotch show(int id);
	public Scotch create(String scotchJSON);
	public Scotch update(int id, String scotchJSON);
	public boolean destroy(int id);
}
