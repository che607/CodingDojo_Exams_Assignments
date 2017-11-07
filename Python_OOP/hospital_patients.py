class Patient(object):
    def __init__(self,id_number,patient_name,allergies,bed_number):
        self.id_number = id_number
        self.patient_name = patient_name
        self.allergies = allergies
        self.bed_number = bed_number
    def display(self):
        print "-ID: {} -Name: {} -Allergies: {} -Bed Number: {}".format(self.id_number,self.patient_name,
        self.allergies,self.bed_number)
        return self

class Hospital(object):
    def __init__(self,name,capacity):
        self.name = name
        self.patients = []
        self.capacity = capacity

    def admit_patient(self,id_number,patient_name,allergies,bed_number):
        if 0 < self.capacity:
            new_patient = Patient(id_number,patient_name,allergies,bed_number)
            self.patients.append(new_patient)
            self.capacity -= 1
            print "Patient admission confirmed!"
        else:
            print "Hospital is full!"
        return self
    def patient_info(self):
        for patients in self.patients:
            patients.display()
        print "Rooms left:",self.capacity
        return self
    def discharge(self,bed_number):
        for patient in self.patients:
            if patient.bed_number == bed_number:
                del self.patients[self.patients.index(patient)]
                self.capacity += 1
                print self.capacity
        return self
hospital = Hospital("St.Agnes",200)
print hospital.admit_patient(3,"Jose","Yes",3).patient_info().discharge(3)
