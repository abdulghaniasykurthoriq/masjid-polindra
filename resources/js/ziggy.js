const Ziggy = {
    url: 'http://localhost',
    port: null,
    defaults: {},
    routes: {
        'sanctum.csrf-cookie': {
            uri: 'sanctum/csrf-cookie',
            methods: ['GET', 'HEAD'],
        },
        'ignition.healthCheck': {
            uri: '_ignition/health-check',
            methods: ['GET', 'HEAD'],
        },
        'ignition.executeSolution': {
            uri: '_ignition/execute-solution',
            methods: ['POST'],
        },
        'ignition.updateConfig': {
            uri: '_ignition/update-config',
            methods: ['POST'],
        },
        'profile.edit': { uri: 'profile', methods: ['GET', 'HEAD'] },
        'profile.update': { uri: 'profile', methods: ['PATCH'] },
        'profile.destroy': { uri: 'profile', methods: ['DELETE'] },
        'postingan.index': { uri: 'postingan', methods: ['GET', 'HEAD'] },
        'kas.index': { uri: 'laporan-kas', methods: ['GET', 'HEAD'] },
        'kas.createPemasukan': {
            uri: 'laporan-kas/pemasukan',
            methods: ['GET', 'HEAD'],
        },
        'kas.createPengeluaran': {
            uri: 'laporan-kas/pengeluaran',
            methods: ['GET', 'HEAD'],
        },
        'kas.detail': { uri: 'laporan-kas/detail', methods: ['GET', 'HEAD'] },
        'event.index': { uri: 'event', methods: ['GET', 'HEAD'] },
        'event.detail': { uri: 'event/detail', methods: ['GET', 'HEAD'] },
        'event.create': { uri: 'event/create', methods: ['GET', 'HEAD'] },
        'postingan.create': {
            uri: 'postingan/create',
            methods: ['GET', 'HEAD'],
        },
        'postingan.update': {
            uri: 'postingan/update',
            methods: ['GET', 'HEAD'],
        },
        'kehadiran-jamaah.index': {
            uri: 'kehadiran-jamaah',
            methods: ['GET', 'HEAD'],
        },
        'kotak-saran.index': { uri: 'kotak-saran', methods: ['GET', 'HEAD'] },
        'kotak-saran.masuk': {
            uri: 'kotak-saran/masuk',
            methods: ['GET', 'HEAD'],
        },
        'akun.index': { uri: 'akun', methods: ['GET', 'HEAD'] },
        'akun.create': { uri: 'akun/create', methods: ['GET', 'HEAD'] },
        'akun.update': { uri: 'akun/update/{id}', methods: ['GET', 'HEAD'] },
        'akun.destroy': { uri: 'akun/{id}/delete', methods: ['DELETE'] },
        register: { uri: 'register', methods: ['GET', 'HEAD'] },
        login: { uri: 'login', methods: ['GET', 'HEAD'] },
        'password.request': {
            uri: 'forgot-password',
            methods: ['GET', 'HEAD'],
        },
        'password.email': { uri: 'forgot-password', methods: ['POST'] },
        'password.reset': {
            uri: 'reset-password/{token}',
            methods: ['GET', 'HEAD'],
        },
        'password.store': { uri: 'reset-password', methods: ['POST'] },
        'verification.notice': {
            uri: 'verify-email',
            methods: ['GET', 'HEAD'],
        },
        'verification.verify': {
            uri: 'verify-email/{id}/{hash}',
            methods: ['GET', 'HEAD'],
        },
        'verification.send': {
            uri: 'email/verification-notification',
            methods: ['POST'],
        },
        'password.confirm': {
            uri: 'confirm-password',
            methods: ['GET', 'HEAD'],
        },
        'password.update': { uri: 'password', methods: ['PUT'] },
        logout: { uri: 'logout', methods: ['POST'] },
    },
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
