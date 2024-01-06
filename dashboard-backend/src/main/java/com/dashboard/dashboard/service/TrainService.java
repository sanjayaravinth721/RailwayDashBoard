package com.dashboard.dashboard.service;

import com.dashboard.dashboard.model.Train;
import com.dashboard.dashboard.repository.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// TrainService.java
@Service
public class TrainService {
    private final TrainRepository trainRepository;

    @Autowired
    public TrainService(TrainRepository trainRepository) {
        this.trainRepository = trainRepository;
    }

    public List<Train> getAllTrains() {
        return trainRepository.findAll();
    }

    public Train getTrainById(Long trainId) {
        return trainRepository.findById(trainId).orElse(null);
    }

    public Train saveTrain(Train train) {
        return trainRepository.save(train);
    }

    public void deleteTrain(Long trainId) {
        trainRepository.deleteById(trainId);
    }
}

