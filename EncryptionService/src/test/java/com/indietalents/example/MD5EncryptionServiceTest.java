package com.indietalents.example;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

import org.junit.Test;

public class MD5EncryptionServiceTest {
	
	EncryptionService service = new MD5EncryptionService();
	
	@Test
	public void testMessageEncryption() {
		String message = "reincarnate";
		String messageEncrypted = service.encryptMessage(message);
		assertEquals("44d140d7082055f4ffe465a3ce25e40a", messageEncrypted);
	}
	
	@Test
	public void testDifferentHash() {
		String encryptedOne = service.encryptMessage("reincarnate");
		String encryptedTwo = service.encryptMessage("creatures");
		assertFalse(encryptedOne.equals(encryptedTwo));
	}

}
