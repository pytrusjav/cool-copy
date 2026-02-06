package com.cool;

import com.cool.core.cache.CoolCache;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.cache.RedisCacheWriter;

@SpringBootTest
class CoolAdminJavaApplicationTests {

    @Autowired
    CoolCache coolCache;


    @Test
    void contextLoads() {
        coolCache.set("ALL_sms:18000000000", "6666");
    }

}
