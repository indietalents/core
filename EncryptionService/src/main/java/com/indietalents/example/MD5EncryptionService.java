package com.indietalents.example;

import org.apache.commons.codec.digest.DigestUtils;

public class MD5EncryptionService implements EncryptionService {

	@Override
	public String encryptMessage(String message) {
		return DigestUtils.md5Hex(message);
	}
	
}
