```javascript
import * as TaskManager from 'expo-task-manager';
import * as Constants from 'expo-constants';

// Task definition
TaskManager.defineTask('MY_BACKGROUND_TASK', async ({ data, progress }) => {
  try {
    const deviceId = Constants.deviceId || 'defaultDeviceId'; // Handle null case
    console.log('Device ID in background task:', deviceId);
    // Your background task logic here, using the deviceId safely
  } catch (error) {
    console.error('Error in background task:', error);
  }
});

// Schedule the task (if needed)
TaskManager.startTaskAsync('MY_BACKGROUND_TASK');
```