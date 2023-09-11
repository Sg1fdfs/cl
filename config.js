/*
* https://gitgud.io/ahsk/clewd
* https://github.com/h-a-s-k/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "__cf_bm=vKVq8yxGomDeY_mj9TD_nW1ksIjO_UtJlvMVzTkZfks-1694342695-0-AX5u2SZoAwMz/Dln/ifBknYEgX48H0InsRT5JLdZawLxgMvjUr+0fq2D++r4iRymGj5+Gn+Ex5VAJh0vkGruot0=; cf_clearance=Qgp18SfRQZLMjGjhPplStxjlHQk3dKypYSCTjk55o4U-1694342697-0-1-3b06e9b4.c85d8403.6c07b654-0.2.1694342697; sessionKey=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; __stripe_mid=1fcfd8e6-bcd8-446f-9118-71531d2ac8dc8e66d2; __stripe_sid=d4b5c0c6-e524-496b-9dd8-21fd19d830645af8da",
    "Ip": "127.0.0.1",
    "Port": 8444,
    "BufferSize": 8,
    "SystemInterval": 3,
    "PersonalityFormat": "{{CHAR}}'s personality: {{PERSONALITY}}",
    "ScenarioFormat": "Dialogue scenario: {{SCENARIO}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": false,
        "PreserveChats": false,
        "LogMessages": false,
        "Superfetch": true
    },
    "SuperfetchHost": "localhost",
    "SuperfetchPort": 8443,
    "SuperfetchTimeout": 120
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */