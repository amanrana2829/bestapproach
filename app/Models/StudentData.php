<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class StudentData extends Authenticatable
{
    use Notifiable;

    protected $table = 'student_data'; // Required since the table name is not "student_data"

    protected $primaryKey = 'id';

    protected $fillable = [
        'role',
        'student_name',
        'parent_name',
        'course',
        'class_name',
        'student_email',
        'student_mobile',
        'password',
    ];

    protected $hidden = [
        'password',
    ];


    public function getAuthIdentifierName()
    {
        return 'student_email'; // Laravel will use this for login
    }


    public function getAuthPassword()
    {
        return $this->password; // Laravel will compare this to the hashed input
    }

    // Optional: if you're using reset password tokens
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }
    
}
