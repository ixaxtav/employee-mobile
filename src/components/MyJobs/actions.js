import * as Flux from '../../utils/flux-state';
import { getData } from '../../fetch';

/**
 * Get shift application
 */
const getApplication = (applicationId) => {
  getData(`/applications/${applicationId}`)
    .then((jobs) => {
      Flux.dispatchEvent('GetApplication', jobs);
    })
    .catch((err) => {
      Flux.dispatchEvent('JobStoreError', err);
    });
};

/**
 * Get shift job
 */
const getJob = (shiftId) => {
  getData(`/shifts/${shiftId}`)
    .then((jobs) => {
      Flux.dispatchEvent('GetJob', jobs);
    })
    .catch((err) => {
      Flux.dispatchEvent('JobStoreError', err);
    });
};

/**
 * Get pending jobs
 */
const getPendingJobs = () => {
  getData('/employees/me/applications')
    .then((jobs) => {
      Flux.dispatchEvent('GetPendingJobs', jobs);
    })
    .catch((err) => {
      Flux.dispatchEvent('JobStoreError', err);
    });
};

/**
 * Get upcoming jobs
 */
const getUpcomingJobs = () => {
  getData('/employees/me/shifts?upcoming=true&status=FILLED,OPEN')
    .then((jobs) => {
      Flux.dispatchEvent('GetUpcomingJobs', jobs);
    })
    .catch((err) => {
      Flux.dispatchEvent('JobStoreError', err);
    });
};

/**
 * Get completed jobs
 */
const getCompletedJobs = () => {
  getData('/employees/me/shifts?expired=true')
    .then((jobs) => {
      Flux.dispatchEvent('GetCompletedJobs', jobs);
    })
    .catch((err) => {
      Flux.dispatchEvent('JobStoreError', err);
    });
};

/**
 * Get failed jobs
 */
const getFailedJobs = () => {
  getData('/employees/me/shifts?expired=true&failed=true')
    .then((jobs) => {
      Flux.dispatchEvent('GetFailedJobs', jobs);
    })
    .catch((err) => {
      Flux.dispatchEvent('JobStoreError', err);
    });
};

export {
  getUpcomingJobs,
  getPendingJobs,
  getCompletedJobs,
  getFailedJobs,
  getApplication,
  getJob,
};
