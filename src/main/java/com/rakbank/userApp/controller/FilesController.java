package com.rakbank.userApp.controller;

import com.rakbank.userApp.messages.ResponseFile;
import com.rakbank.userApp.messages.ResponseMessage;
import com.rakbank.userApp.model.Files;
import com.rakbank.userApp.repository.FilesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class FilesController {

    @Autowired
    FilesRepository filesRepository;



    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFileById(@PathVariable(required = true) long id) {

                filesRepository.findById(id);
        Files file = filesRepository.findById(id).get();
        System.out.println(file);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
                .body(file.getData());
    }

    @GetMapping("/getFiles")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
        List<ResponseFile> files = filesRepository.findAll().stream().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/files/")
                    .path(dbFile.getId()+"")
                    .toUriString();

            return new ResponseFile(
                    dbFile.getName(),
                    fileDownloadUri,
                    dbFile.getType(),
                    dbFile.getData().length);
        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(files);
    }

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {

        System.out.println("Coming inside FileController.."+ file);
        String message = "";
        try {
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());

            System.out.println("filename: "+ fileName);
            Files FileDB = new Files(fileName, file.getContentType(), file.getBytes());

            System.out.println("FileDB: "+ FileDB);

            filesRepository.save(FileDB);

            System.out.println("Saved File!");

            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }








}
