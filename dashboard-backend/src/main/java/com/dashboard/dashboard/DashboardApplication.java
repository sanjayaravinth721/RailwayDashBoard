package com.dashboard.dashboard;

import com.dashboard.dashboard.repository.TrainRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class DashboardApplication {
	private TrainRepository trainRepository;

	public DashboardApplication(TrainRepository trainRepository) {
		this.trainRepository = trainRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(DashboardApplication.class, args);
	}


}

/*
Problem statement: Railway Platform Dashboard

User personas: Passenger, Station Master

Use case 1: Passenger should be able to view-only a list of trains coming to the station, what platform and what time in tabular manner.

User case 2: Station master should be able to input AND edit what train is coming to what platform and what time.

Recommendations: Solution should have both Frontend developed in React JS and Backend developed as REST based microservices using Java Spring boot or Node JS using a database of your choice. Submitted code should be run in evaluator local.
 */