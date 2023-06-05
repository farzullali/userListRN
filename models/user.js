class User{
    constructor(
        id,
        name,
        surname,
        birthDate,
        gender,
        profession,
        isActive,
        biography,
        deletedStatus
    ){
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.birthDate = birthDate,
        this.gender = gender,
        this.profession = profession,
        this.isActive = isActive,
        this.biography = biography,
        this.deletedStatus = deletedStatus
    }
}

export default User;