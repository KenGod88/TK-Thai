using System.Net;
using System.Net.Mail;

public class EmailService
{
    public async Task SendEmail(ContactRequest contact)
    {
        var smtpClient = new SmtpClient("smtp.gmail.com")
        {
            Port = 587,
            Credentials = new NetworkCredential(
                "your_email@gmail.com",
                "APP_PASSWORD"
            ),
            EnableSsl = true
        };

        var mail = new MailMessage
        {
            From = new MailAddress("your_email@gmail.com"),
            Subject = "Nieuw contactbericht TK Gym",
            Body = $"""
Naam: {contact.Name}

Email: {contact.Email}

Bericht:
{contact.Message}
"""
        };

        mail.To.Add("info@tkgym.be");

        await smtpClient.SendMailAsync(mail);
    }
}