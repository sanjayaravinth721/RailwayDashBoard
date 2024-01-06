package com.dashboard.dashboard.repository;

import com.dashboard.dashboard.model.Train;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainRepository extends JpaRepository<Train, Long> {
}
