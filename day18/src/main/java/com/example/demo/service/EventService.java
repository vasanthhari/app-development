package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.entity.EventEntity;
import com.example.demo.repository.EventInterRepo;

@Service
public class EventService {
	@Autowired
	EventInterRepo er;
	public Page<EventEntity> SortingAndPaging(int page,int size,String field){
		Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
		return er.findAll(paging);
	}
	public Page<EventEntity> Paging(int CurrentPage,int itemsPerPage){
		Pageable paging=PageRequest.of(CurrentPage,itemsPerPage);
		return er.findAll(paging);

	}
}