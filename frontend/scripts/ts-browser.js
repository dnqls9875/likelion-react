import { loadModule } from "https://klesun.github.io/ts-browser/src/ts-browser.js";

await loadModule("./scripts/main.ts"); // ? ./으로 작성한 이유는? =>  loadModule 브라우저가 실행 된 상태에서 로드 되는 거기 때문에 localhost/script 라고 생각하면 된다.
