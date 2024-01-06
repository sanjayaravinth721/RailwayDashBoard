package com.dashboard.dashboard.controller;

import com.dashboard.dashboard.model.Train;
import com.dashboard.dashboard.service.TrainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/trains")
public class TrainController {

    private final TrainService trainService;

    @Autowired
    public TrainController(TrainService trainService) {
        this.trainService = trainService;
    }

    @GetMapping("/list")
    public List<Train> getTrainList() {
        return trainService.getAllTrains();
    }

    @GetMapping("/{trainId}")
    public Train getTrainById(@PathVariable Long trainId) {
        return trainService.getTrainById(trainId);
    }

    @PostMapping("/add")
    public Train addTrain(@RequestBody Train train) {
        return trainService.saveTrain(train);
    }

    @DeleteMapping("/delete/{trainId}")
    public void deleteTrain(@PathVariable Long trainId) {
        trainService.deleteTrain(trainId);
    }
}
