package com.bezkoder.springjwt.models;

import java.sql.Timestamp;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.*;

@Entity
@Table(name = "company")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "created", nullable = false, updatable = false)
	@CreationTimestamp
	private Timestamp created;
	
	@Column(name = "updated")
	@UpdateTimestamp
	private Timestamp updated;
}
