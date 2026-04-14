import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "katcard-5b615",
      clientEmail: "firebase-adminsdk-fbsvc@katcard-5b615.iam.gserviceaccount.com",
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8byMynYN1J1yQ\nGWzqMjTzZihT6ZvZOe0ddf6RkLLs6BUI5lC5baAX+MYokgrRGnVbShG3iSmqAFnT\nEjqIBH/U/5KdJ4MiMpoZTnDWEYi6ASFKTWLy2BIHQOmlhOYbp7F1PFmjLo07bj1r\nMnK8NUlHwlPs+20WWssNUzk8ddecNlHOCJCcma7x7U+ip4sLSUJt4h3TMzQCwzzJ\nhXDojfwHi95lU0Hm/9wzZn9ZTd/tEhXumX4KMLBskZYLEAq7daCa+PwcH4jcTdTd\nwOu5Y/w9LKUhlplZh46nhU59y3Pscr9TFF/krmgEAplyxLKaorQRn1PghYpUNHZV\nzIsMWelTAgMBAAECggEAE2xzWN7Ss6tUh8gPKY72VVak9o1gksI9VmmYzaF4SCJe\nNLYlARAzTfVHW9w+ADL1gO0AKYaahFsX50F8RhQMp0SW9NsjUc2cg9pJmE9jZCUE\nrPeQKQ8rwJKo4vZxj8035ilL5h3A0iz5aMjg+dSWUq7N3uJF6uV+A8gd4MUW7hOf\nqnXeUh6ngESHxYkdFO825AYR0GslGr3Ns1pt7JkdS+ATPkPlHtvaqiyDcDc1Jg9g\ntLc0gNy8s1uRtntMXTOQ9nXNhHUTzfcgt61QyzdNdtKTaQLyJdR2mlcYI1UaX5b+\nXT//f/TFWMR4mDCpSQ8BtkXgM8GWrX+3ZDjsHrw/TQKBgQD6waf2CM+8HrWRnBPA\nHBHM4Ut6GHpfQBecZ/zGQdnv7oi5+wiOzc7mL71r5AUPQw7v0cm9fof7NIB7Z37N\nI0Zc+GgHPFHn/X63ndwiI1lY89uKI8l+51Jls4DUycxBB/hscKK+NgGsqUQvw0Cy\nx2VR48GMlaIMizozeAvGRxCTrQKBgQDAX9vdog6qqCrzgxX6CUIdQ32KTWCcTRXn\nxPJTkTv7FU2tZJVWlkPLP6kXOFMgsDUHEq2P/9rlwkw3uLGDmweGZ7SFmsE+6Pes\nicTS9sPX0rkGFseLr1210Qhq1QNluK0a2PTVbgP5RgWpJ1lZcEjksrQ/F7z+E1AP\nSxsxM4wQ/wKBgAvVmey1q8AwHteZayE08e4eb+Z6Q0Q9jR+3lKlysCtvsYo9e8Dp\nm6snc6Qk5cw7mPfeicvkrdxANRQd5VEfKhH3M0msIh11zEY0MBB4ZJ4bHDBf0gGo\nPy5Hk3v3bilfi+zqP/QELn4Mmwg6CdKmMHT178uHwFchNwT41G1uKy0dAoGAP3cg\nfRT6y7hhOycS+ANX6XmbkCYI6mfQAz+JRqKSbDpR/xNA5Wj7grFE4qE1Y4JebC/w\nTKJ3H/ei13s6LRXXPLM37h/pAw0usKBe6853O9uMKQMY3++B9fq5US1nSobLrSDI\nXSVHcFR2h6CwrH4Lvk9qgaoeMqBCeFkp5miAHBcCgYEAhxaS0hmBEkvZ2OjOVROo\nwmHWWBChW1nIi2rICexD8ZNRxOWttEEVsAMjfZ6iOKra13RXH47o+etiwqoAs1Yz\nSwptW0hP7m7aFjQnJJdjKQLpupHpT75Ih5drLHSYXSeQRTJFsHBRa6yau3c380Po\nRHGt6Pnm1xAlixuhIh12//c=\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
    }),
  });
}

export const db = admin.firestore();