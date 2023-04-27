import ScriptName from '../features/script/ScriptName';

const isToogleScript = (scriptName: ScriptName): boolean => {
  return [
    ScriptName.HomeSecurity,
    ScriptName.GargenSecurity,
    ScriptName.PresenceEffect,
  ].includes(scriptName);
};

const isModeScript = (scriptName: ScriptName): boolean => {
  return [
    ScriptName.EconomMode,
    ScriptName.NormalMode,
    ScriptName.PartyMode,
  ].includes(scriptName);
};

const isMoveScript = (scriptName: ScriptName): boolean => {
  return [ScriptName.HomeLeave, ScriptName.HomeWent].includes(scriptName);
};

export { isModeScript, isMoveScript, isToogleScript };
