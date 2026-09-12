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
      "value": -0.4,
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
      "paramName": "rpe_target_adjustment",
      "previousValue": -0.2,
      "newValue": -0.4,
      "timestamp": "2026-08-22 10:04:24.015915",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "regression_sensitivity",
      "previousValue": -0.2,
      "newValue": -0.2,
      "timestamp": "2026-08-22 10:04:24.015915",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "progression_bias",
      "previousValue": 0.2,
      "newValue": 0.2,
      "timestamp": "2026-08-22 10:04:24.015915",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "rpe_target_adjustment",
      "previousValue": 0.0,
      "newValue": -0.2,
      "timestamp": "2026-08-22 10:02:56.871965",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "regression_sensitivity",
      "previousValue": -0.2,
      "newValue": -0.2,
      "timestamp": "2026-08-22 10:02:56.871965",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
    {
      "paramName": "progression_bias",
      "previousValue": 0.2,
      "newValue": 0.2,
      "timestamp": "2026-08-22 10:02:56.871965",
      "controlState": "too_conservative",
      "controlReason": "increase_progression"
    },
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
  "decision_safety_constants": {
    "BASE_Z_CUTOFF": 1.0,
    "CONTROL_SHIFT_MULTIPLIER": 1.25,
    "PARAM_MIN_VALUE": -0.2,
    "PARAM_MAX_VALUE": 0.2,
    "TARGET_REGRESS_MAX": 0.25
  },
  "fatigue_recovery_constants": {
    "FATIGUE_HIGH": 5.5,
    "FATIGUE_MED": 4.5,
    "DEBT_HIGH": 2.5,
    "DEBT_MED": 1.5,
    "REGRESS_HIGH": 0.5,
    "REGRESS_MED": 0.3,
    "RECOVERY_BASELINE": 4.0,
    "DEBT_DECAY": 0.7,
    "DECAY_PER_DAY": 0.15
  },
  "governance_flags": {
    "R4": {
      "status": "open",
      "detail": "oracle-replay gate not wired into any CI workflow; pass/fail state requires a manual `pytest docs/architecture/ape2_greenfield/oracle/test_oracle_replay.py` run to confirm currently",
      "adr": "ADR-0004"
    },
    "R5": {
      "status": "open",
      "detail": "no alembic/ or migrations/ directory exists at repo root; the 2 redirected tests in tests/w9f_alpha_evidence_schema/test_migration_contract.py remain a live decision pending ADR-0005",
      "adr": "ADR-0005"
    },
    "R7": {
      "status": "open",
      "detail": "'_0036' is registered and 10 alpha_* tables exist live, while docs/strategy/w9f/w9f_alpha_evidence_schema_validation_checklist.md reports Status: DRAFT \u2014 PENDING PROGRAM DIRECTOR AUTHORIZATION; verdict: NO-GO -- contradiction unresolved pending ADR-0008",
      "adr": "ADR-0008"
    }
  },
  "generated_at": "2026-09-12T17:46:22.687255+00:00"
};
