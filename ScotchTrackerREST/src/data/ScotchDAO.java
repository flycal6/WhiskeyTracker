package data;

import java.util.List;

import entities.Scotch;

public interface ScotchDAO {
	public List<Scotch> index();
	public Scotch show(int id);
	public Scotch create(String ScotchJSON);
	public Scotch update(int id, String ScotchJSON);
	public boolean destroy(int id);
}
