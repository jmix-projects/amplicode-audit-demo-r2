package com.amplicode.auditdemo;

import com.amplicode.audit.useractions.domain.UserAction;
import com.amplicode.audit.useractions.repository.UserActionRepository;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.time.OffsetDateTime;

@Component
public class UserActionSaver {

    private final UserActionRepository repository;

    public UserActionSaver(UserActionRepository repository) {
        this.repository = repository;
    }

    @PostConstruct
    private void populateDb() {
        final UserAction userAction = new UserAction();
        userAction.setUsername("user");
        userAction.setComponentType("button");
        userAction.setComponentId("Button1");
        userAction.setClientIp("8631:2070:73fc:4395:b62b:3fc8:3d33:32fd");
        userAction.setActionDateTime(OffsetDateTime.now());

        repository.saveAndFlush(userAction);
    }

    @PreDestroy
    private void cleanDb() {
        repository.deleteAll();
    }


}
