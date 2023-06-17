package authdto

type LoginResponse struct {
	ID       int    `gorm:"type: varchar(255)" json:"id"`
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Token    string `gorm:"type: varchar(255)" json:"token"`
	Role     string `gorm:"type: varchar(255)" json:"role"`
	Fullname string `json:"fullname" gorm:"type: varchar(255)" `
	Phone    string `json:"phone" gorm:"type: varchar(255)"`
	Gender   string `json:"gender" gorm:"type: varchar(255)"`
	Address  string `json:"address" gorm:"type: varchar(255)"`
}

type AuthResponse struct {
	Email string `gorm:"type: varchar(255)" json:"email"`
	Token string `gorm:"type: varchar(255)" json:"token"`
}
