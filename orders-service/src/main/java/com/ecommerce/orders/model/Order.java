package com.ecommerce.orders.model;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "\"userId\"")
    private Integer userId;

    @Column(name = "\"totalAmount\"")
    private BigDecimal totalAmount;

    @ManyToOne
    @JoinColumn(name = "\"statusId\"")
    private OrderStatus status;

    @Column(name = "\"createdAt\"")
    private LocalDateTime createdAt;

    @Column(name = "\"updatedAt\"")
    private LocalDateTime updatedAt;
}
