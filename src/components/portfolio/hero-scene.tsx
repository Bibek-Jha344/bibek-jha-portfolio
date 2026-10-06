import { useEffect, useState, type PointerEvent } from "react";

export function HeroScene() {
  const [greeting, setGreeting] = useState("Hello! 👋");
  const [typing, setTyping] = useState(false);
  const [reacting, setReacting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const greetingTimer = setTimeout(() => {
      setGreeting("Nice to meet you.");
      setTyping(!reducedMotion);
    }, 1400);
    return () => clearTimeout(greetingTimer);
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
    const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 3;
    event.currentTarget.style.setProperty("--look-x", `${offsetX}px`);
    event.currentTarget.style.setProperty("--look-y", `${offsetY}px`);
  };

  const resetPointer = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.style.setProperty("--look-x", "0px");
    event.currentTarget.style.setProperty("--look-y", "0px");
    setReacting(false);
  };

  return (
    <div className={`hero-visual-scene robot-cat-scene is-dancing${reacting ? " is-reacting" : ""}`}>
      <div className="robot-cat-grain" aria-hidden="true" />
      <div className="robot-cat-orbit robot-cat-orbit-one" aria-hidden="true" />
      <div className="robot-cat-orbit robot-cat-orbit-two" aria-hidden="true" />

      <div className="robot-cat-status" aria-hidden="true">
        <span className="robot-cat-status-light" />
        COMPANION UNIT <span>01</span>
      </div>

      <div className="robot-cat-bubble is-visible" aria-live="polite">
        <span
          className={typing && !reacting ? "is-typing" : ""}
          onAnimationEnd={() => setTyping(false)}
        >
          {reacting ? "Ready to build? 🤖" : greeting}
        </span>
        <i aria-hidden="true" />
      </div>

      <button
        type="button"
        className="robot-cat-control"
        aria-label="Interact with the robotic cat"
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setReacting(true)}
        onPointerLeave={resetPointer}
        onFocus={() => setReacting(true)}
        onBlur={() => setReacting(false)}
        onClick={() => setReacting(true)}
      >
        <svg className="robot-cat-svg" viewBox="0 0 480 480" role="img" aria-labelledby="robot-cat-title">
          <title id="robot-cat-title">A seated dark-metal robotic cat with cyan illuminated eyes</title>
          <defs>
            <linearGradient id="cat-metal" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#81919a" />
              <stop offset="0.16" stopColor="#344651" />
              <stop offset="0.4" stopColor="#17242f" />
              <stop offset="0.72" stopColor="#0d1721" />
              <stop offset="1" stopColor="#647680" />
            </linearGradient>
            <linearGradient id="cat-face" x1="0" y1="0" x2="0.9" y2="1">
              <stop offset="0" stopColor="#435966" />
              <stop offset="0.4" stopColor="#1b2a35" />
              <stop offset="1" stopColor="#0b141e" />
            </linearGradient>
            <linearGradient id="cat-ear" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#28e0d0" stopOpacity="0.9" />
              <stop offset="1" stopColor="#168ba8" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="cat-eye" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#9afff2" />
              <stop offset="0.5" stopColor="#20dfd0" />
              <stop offset="1" stopColor="#168abf" />
            </linearGradient>
            <linearGradient id="cat-platform" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#18313c" />
              <stop offset="0.5" stopColor="#101e2b" />
              <stop offset="1" stopColor="#253746" />
            </linearGradient>
            <linearGradient id="cat-metal-glint" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#d5faff" stopOpacity="0.02" />
              <stop offset="0.5" stopColor="#b6f7f5" stopOpacity="0.42" />
              <stop offset="1" stopColor="#d5faff" stopOpacity="0.02" />
            </linearGradient>
            <filter id="cat-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="platform-glow" x="-80%" y="-100%" width="260%" height="300%">
              <feGaussianBlur stdDeviation="9" />
            </filter>
          </defs>

          <ellipse className="robot-cat-ground-glow" cx="241" cy="396" rx="155" ry="26" />
          <ellipse className="robot-cat-platform-shadow" cx="241" cy="400" rx="142" ry="19" />
          <path className="robot-cat-platform" d="M105 379 Q241 349 377 379 L355 408 Q241 438 127 408 Z" fill="url(#cat-platform)" />
          <ellipse className="robot-cat-platform-rim" cx="241" cy="380" rx="136" ry="20" />
          <ellipse className="robot-cat-platform-inner" cx="241" cy="380" rx="105" ry="12" />
          <path className="robot-cat-platform-mark" d="M185 405 Q241 415 297 405" />

          <g className="robot-cat-idle">
            <g className="robot-cat-tail-group">
              <path className="robot-cat-tail-shadow" d="M305 309 C362 329 397 300 391 260 C387 231 361 221 346 239" />
              <path className="robot-cat-tail" d="M305 309 C362 329 397 300 391 260 C387 231 361 221 346 239" />
              <path className="robot-cat-tail-line" d="M311 312 C363 325 388 296 381 264" />
              <path className="robot-cat-tail-tip" d="M346 239 L354 230" />
            </g>

            <path className="robot-cat-body" d="M167 226 C152 244 145 273 148 311 C150 344 169 363 201 364 L300 364 C326 361 337 344 329 319 C323 297 302 279 278 262 L274 231 Z" fill="url(#cat-metal)" />
            <path className="robot-cat-body-glint" d="M165 253 Q168 235 186 232 L196 234 Q177 251 176 296 L173 323 Q161 307 165 253 Z" />
            <path className="robot-cat-haunch" d="M255 276 C290 269 319 292 323 323 C326 343 314 355 294 356 L257 354 C242 344 239 314 245 294 Z" />
            <path className="robot-cat-haunch-seam" d="M280 286 Q302 301 305 324 M275 343 L304 344" />
            <path className="robot-cat-chest" d="M175 235 C190 225 250 224 269 237 L278 313 C276 341 261 356 237 358 L193 355 C174 345 166 326 168 299 Z" />
            <path className="robot-cat-chest-glint" d="M184 243 Q216 229 252 241" />
            <path className="robot-cat-chest-panel" d="M190 253 Q221 241 255 253 L258 311 Q240 323 202 315 Z" />
            <path className="robot-cat-chest-seam" d="M222 255 L222 311 M198 284 L254 284" />
            <circle className="robot-cat-core" cx="223" cy="284" r="8" />
            <circle className="robot-cat-core-ring" cx="223" cy="284" r="15" />

            <g className="robot-cat-foreleg robot-cat-foreleg-left">
              <path d="M180 240 C163 250 158 274 166 294 L178 305 L191 295 L183 279 L202 259 Z" />
              <path className="robot-cat-foreleg-glint" d="M179 248 Q165 261 170 277" />
              <path className="robot-cat-joint" d="M171 278 L187 282 M174 296 L184 289" />
              <circle className="robot-cat-joint-light" cx="178" cy="282" r="3" />
            </g>
            <g className="robot-cat-foreleg robot-cat-foreleg-right">
              <path d="M266 240 C283 250 291 271 286 290 L276 301 L263 291 L270 276 L253 260 Z" />
              <path className="robot-cat-foreleg-glint" d="M269 248 Q283 260 282 274" />
              <path className="robot-cat-joint" d="M282 276 L267 281 M280 292 L269 286" />
              <circle className="robot-cat-joint-light" cx="274" cy="280" r="3" />
            </g>

            <path className="robot-cat-leg" d="M178 319 L180 358 Q181 369 194 371 L215 371 Q224 368 223 358 L221 323 Z" />
            <path className="robot-cat-leg" d="M238 322 L239 357 Q239 369 252 371 L277 371 Q287 369 284 357 L276 317 Z" />
            <path className="robot-cat-paw robot-cat-paw-left" d="M170 363 Q194 357 219 365 Q226 372 219 379 L177 380 Q166 376 170 363 Z" />
            <path className="robot-cat-paw robot-cat-paw-right" d="M238 364 Q259 357 283 365 Q292 372 284 379 L247 380 Q236 376 238 364 Z" />
            <path className="robot-cat-paw-seam" d="M186 367 L184 375 M202 366 L202 376 M254 366 L254 376 M270 366 L272 375" />

            <g className="robot-cat-head">
              <path className="robot-cat-ear" d="M151 130 L127 48 Q125 41 119 48 L99 137 Z" />
              <path className="robot-cat-ear" d="M259 130 L284 47 Q287 40 293 48 L315 139 Z" />
              <path className="robot-cat-ear-inner" d="M136 111 L126 68 L114 120 Z" />
              <path className="robot-cat-ear-inner" d="M278 111 L290 67 L303 121 Z" />
              <path className="robot-cat-ear-joint" d="M119 132 L145 125 M269 125 L297 132" />

              <path className="robot-cat-head-shell" d="M119 139 Q117 114 143 105 L194 88 Q216 82 239 91 L279 106 Q302 114 300 140 L293 199 Q289 230 260 241 L165 244 Q136 239 129 211 Z" fill="url(#cat-face)" />
              <path className="robot-cat-face-glint" d="M143 121 Q191 94 241 101" />
              <path className="robot-cat-temple-seam" d="M132 151 L141 176 M288 151 L280 176" />
              <path className="robot-cat-brow" d="M143 143 Q166 128 190 141 M228 140 Q255 126 278 143" />
              <path className="robot-cat-eye-socket" d="M143 157 Q164 143 187 156 L184 180 Q165 193 145 179 Z" />
              <path className="robot-cat-eye-socket" d="M231 155 Q253 141 276 156 L274 179 Q253 193 233 180 Z" />
              <g className="robot-cat-eyes" filter="url(#cat-glow)">
                <ellipse className="robot-cat-eye" cx="165" cy="168" rx="11" ry="8" />
                <ellipse className="robot-cat-eye" cx="253" cy="167" rx="11" ry="8" />
                <circle className="robot-cat-pupil" cx="166" cy="168" r="3.3" />
                <circle className="robot-cat-pupil" cx="254" cy="167" r="3.3" />
              </g>
              <path className="robot-cat-blink" d="M143 168 Q165 184 187 168 M231 167 Q253 183 276 167" />
              <path className="robot-cat-nose" d="M202 187 L211 182 L220 187 L211 193 Z" />
              <path className="robot-cat-mouth" d="M211 193 L211 204 M199 207 L223 207" />
              <path className="robot-cat-muzzle" d="M150 197 L183 202 M238 202 L272 196" />
              <path className="robot-cat-face-seam" d="M139 124 L159 117 M260 116 L281 124 M151 219 Q207 235 268 218" />
              <circle className="robot-cat-bolt" cx="137" cy="189" r="2.2" />
              <circle className="robot-cat-bolt" cx="283" cy="188" r="2.2" />
            </g>
          </g>

          <g className="robot-cat-particles" aria-hidden="true">
            <circle cx="100" cy="240" r="2" />
            <circle cx="365" cy="178" r="1.5" />
            <circle cx="336" cy="328" r="1.8" />
            <circle cx="126" cy="324" r="1.3" />
          </g>
        </svg>
      </button>

      <div className="robot-cat-caption" aria-hidden="true">
        <span>MK-I</span>
        <span className="robot-cat-caption-line" />
        <span>CURIOUS BY DESIGN</span>
      </div>
    </div>
  );
}