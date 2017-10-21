package controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.ScotchDAO;
import entities.Scotch;

@RestController
@RequestMapping(value="/scotch")
public class ScotchController {
	
	@Autowired
	private ScotchDAO scotchDao;

	@RequestMapping(path = "/ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}
	
	@RequestMapping(path="/", method=RequestMethod.GET)
	public List<Scotch> index(HttpServletResponse res){
		res.setStatus(202);
		return scotchDao.index();
	}
	
	@RequestMapping(path="/{id}", method=RequestMethod.GET)
	public Scotch show(@PathVariable int id, HttpServletResponse res) {
		res.setStatus(202);
		return scotchDao.show(id);
	}
	
	@RequestMapping(path="/", method=RequestMethod.POST)
	public Scotch create(@RequestBody String scotchJSON, HttpServletResponse res) {
		res.setStatus(201);
		return scotchDao.create(scotchJSON);
	}
	
	@RequestMapping(path="/{id}", method = RequestMethod.PUT)
	public Scotch update(@PathVariable int id, @RequestBody String scotchJSON, HttpServletResponse res) {
		res.setStatus(202);
		return scotchDao.update(id, scotchJSON);
	}
	
	@RequestMapping(path="/{id}", method=RequestMethod.DELETE)
	public boolean destroy(@PathVariable int id, HttpServletResponse res) {
		res.setStatus(204);
		return scotchDao.destroy(id);
	}
}
