    gl_FragColor.a = dAlpha;
    gl_FragColor = applyMsdf(gl_FragColor);
    if(gl_FragColor.a < 0.1)
        discard;
