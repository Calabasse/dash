window.CALIBRATION = {
  "params": {
    "progression_bias": {
      "value": 0.2,
      "min": -0.2,
      "max": 0.2
    },
    "regression_sensitivity": {
      "value": -0.2,
      "min": -0.2,
      "max": 0.2
    },
    "rpe_target_adjustment": {
      "value": null,
      "min": -1.0,
      "max": 1.0
    }
  },
  "locks": {
    "progression_bias": {
      "isLocked": false,
      "lockedValue": null,
      "lockedBy": null,
      "lockedAt": null
    },
    "regression_sensitivity": {
      "isLocked": false,
      "lockedValue": -0.2,
      "lockedBy": "chadcrawford",
      "lockedAt": "2026-08-16 18:18:49.160940"
    },
    "rpe_target_adjustment": {
      "isLocked": false,
      "lockedValue": null,
      "lockedBy": null,
      "lockedAt": null
    }
  },
  "history": [
    {
      "paramName": "regression_sensitivity",
      "previousValue": -0.2,
      "newValue": -0.2,
      "timestamp": "2026-08-12 01:32:58.378904",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "progression_bias",
      "previousValue": 0.2,
      "newValue": 0.2,
      "timestamp": "2026-08-12 01:32:58.378904",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "regression_sensitivity",
      "previousValue": -0.2,
      "newValue": -0.2,
      "timestamp": "2026-08-09 21:55:57.197868",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "progression_bias",
      "previousValue": 0.2,
      "newValue": 0.2,
      "timestamp": "2026-08-09 21:55:57.197868",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "regression_sensitivity",
      "previousValue": -0.2,
      "newValue": -0.2,
      "timestamp": "2026-08-09 21:55:55.080787",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "progression_bias",
      "previousValue": 0.2,
      "newValue": 0.2,
      "timestamp": "2026-08-09 21:55:55.080787",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "regression_sensitivity",
      "previousValue": -0.175,
      "newValue": -0.2,
      "timestamp": "2026-08-08 23:29:02.669641",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "progression_bias",
      "previousValue": 0.2,
      "newValue": 0.2,
      "timestamp": "2026-08-08 23:29:02.669641",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "regression_sensitivity",
      "previousValue": -0.15,
      "newValue": -0.175,
      "timestamp": "2026-08-08 23:29:01.031990",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "progression_bias",
      "previousValue": 0.2,
      "newValue": 0.2,
      "timestamp": "2026-08-08 23:29:01.031990",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    }
  ],
  "lock_audit": [
    {
      "paramName": "regression_sensitivity",
      "action": "unlock",
      "lockedValue": null,
      "computedValue": null,
      "actor": "chadcrawford",
      "timestamp": "2026-08-16 18:18:51.446679"
    },
    {
      "paramName": "regression_sensitivity",
      "action": "lock",
      "lockedValue": -0.2,
      "computedValue": null,
      "actor": "chadcrawford",
      "timestamp": "2026-08-16 18:18:49.162949"
    },
    {
      "paramName": "regression_sensitivity",
      "action": "unlock",
      "lockedValue": null,
      "computedValue": null,
      "actor": "chadcrawford",
      "timestamp": "2026-08-16 18:18:47.719684"
    },
    {
      "paramName": "regression_sensitivity",
      "action": "lock",
      "lockedValue": -0.2,
      "computedValue": null,
      "actor": "chadcrawford",
      "timestamp": "2026-08-16 18:18:45.936254"
    }
  ],
  "inactive_params": {
    "damping_factor": {
      "value": 0.5,
      "autoTuned": false,
      "note": "Declared in the control schema but never written by run_system_tuner() -- not auto-tuned."
    }
  },
  "generated_at": "2026-08-18T10:30:15.794031+00:00"
};
