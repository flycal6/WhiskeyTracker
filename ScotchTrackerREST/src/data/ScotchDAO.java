package data;

import java.util.List;

import entities.Scotch;

public interface ScotchDAO {
	public List<Scotch> index();
	public Scotch show(int id);
	public Scotch create(String scotchJSON);
	public Scotch update(int id, String scotchJSON);
	public boolean destroy(int id);
}
