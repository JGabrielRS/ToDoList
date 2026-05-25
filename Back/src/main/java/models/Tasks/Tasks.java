package models.Tasks;

import java.time.LocalDateTime;

public class Tasks {
    private int id;
    private int id_user;
    private String content;
    private String title;
    private boolean checked = false;
    private LocalDateTime checked_date;
    private LocalDateTime creation_date;

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public int getIdUser(){
        return id_user;
    }

    public void setIdUser(int id_user){
        this.id_user = id_user;
    }

    public String getContent(){
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public boolean getChecked(){
        return checked;
    }

    public void setChecked(boolean checked){
        this.checked = checked;
    }

    public LocalDateTime getCheckedDate(){
        return checked_date;
    }

    public void setCheckedDate(LocalDateTime checked_date){
        this.checked_date = checked_date;
    }

    public LocalDateTime getCreationDate(){
        return creation_date;
    }

    public void setCreationDate(LocalDateTime creation_date){
        this.creation_date = creation_date;
    }

}
