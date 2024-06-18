import { v4 as uuidv4 } from 'uuid';

export interface VaccineMonitor {
  id: string;
  date: string;
  StallNo: string;
  healthStatus: string;
  note: number;
  reportedBy: string;
  userId: string;
  quantity: number;
  ServiceName: string;
  Result: string;
  MonitoringTime: string;
}

const VaccineService = {
  fetchVaccineRecords,
  addVaccineRecord,
  editVaccineRecord,
  deleteVaccineRecord
};

async function fetchVaccineRecords(): Promise<VaccineMonitor[]> {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    throw new Error("User not logged in");
  }

  const user = JSON.parse(loggedInUser);
  if (!user || !user.id) {
    throw new Error("User ID not found");
  }

  try {
    const response = await fetch('http://localhost:3000/vaccines?userId=' + user.id);
    if (!response.ok) {
      throw new Error('Failed to fetch vaccine records data');
    }
    const vaccineRecordsData: VaccineMonitor[] = await response.json();
    return vaccineRecordsData;
  } catch (error) {
    console.error('Error fetching vaccine records data:', error.message);
    return [];
  }
}

async function addVaccineRecord(newVaccineRecord: Omit<VaccineMonitor, 'id' | 'userId'>): Promise<VaccineMonitor> {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    throw new Error("User not logged in or user data not found");
  }

  const user = JSON.parse(loggedInUser);
  if (!user || !user.id) {
    throw new Error("User ID not found in user data");
  }

  try {
    const vaccineRecordWithId: VaccineMonitor = { id: uuidv4(), userId: user.id, ...newVaccineRecord };

    const response = await fetch('http://localhost:3000/vaccines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vaccineRecordWithId),
    });

    if (!response.ok) {
      throw new Error('Failed to add vaccine record');
    }

    return vaccineRecordWithId;
  } catch (error) {
    console.error('Error adding vaccine record:', error.message);
    throw error;
  }
}

async function editVaccineRecord(id: string, updatedVaccineRecord: Omit<VaccineMonitor, 'id'>): Promise<void> {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    throw new Error("User not logged in");
  }

  const user = JSON.parse(loggedInUser);
  if (!user || !user.id) {
    throw new Error("User ID not found");
  }

  try {
    const response = await fetch(`http://localhost:3000/vaccines/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedVaccineRecord),
    });
    if (!response.ok) {
      throw new Error('Failed to update vaccine record');
    }
  } catch (error) {
    console.error('Error updating vaccine record:', error.message);
    throw error;
  }
}

async function deleteVaccineRecord(id: string): Promise<void> {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    throw new Error("User not logged in");
  }

  const user = JSON.parse(loggedInUser);
  if (!user || !user.id) {
    throw new Error("User ID not found");
  }

  try {
    const response = await fetch(`http://localhost:3000/vaccines/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete vaccine record');
    }
  } catch (error) {
    console.error('Error deleting vaccine record:', error.message);
    throw error;
  }
}

export { VaccineService, VaccineMonitor };
