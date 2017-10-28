package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Scotch {
//	id, name, type, price, taste, age, purchasePlace, notes
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String type;
	private double price;
	private int taste;
	private int age;
	private String purchasePlace;
	private String notes;
	
	/**************** Gets and Sets ************************/
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getTaste() {
		return taste;
	}
	public void setTaste(int taste) {
		this.taste = taste;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getPurchasePlace() {
		return purchasePlace;
	}
	public void setPurchasePlace(String purchasePlace) {
		this.purchasePlace = purchasePlace;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public int getId() {
		return id;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Scotch [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", type=");
		builder.append(type);
		builder.append(", price=");
		builder.append(price);
		builder.append(", taste=");
		builder.append(taste);
		builder.append(", age=");
		builder.append(age);
		builder.append(", purchasePlace=");
		builder.append(purchasePlace);
		builder.append(", notes=");
		builder.append(notes);
		builder.append("]");
		return builder.toString();
	}
	
}
