package com.mbss.backend.controller;

import com.mbss.backend.entity.Contact;
import com.mbss.backend.repository.ContactRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @PostMapping
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {

        Contact savedContact = contactRepository.save(contact);

        return ResponseEntity.ok(savedContact);
    }

    @GetMapping
public ResponseEntity<List<Contact>> getAllContacts(
        @RequestHeader(value = "X-Admin-Key", required = false) String adminKey) {

if (!System.getenv("ADMIN_KEY").equals(adminKey)) {
        return ResponseEntity.status(401).build();
    }

    return ResponseEntity.ok(contactRepository.findAll());
}

}