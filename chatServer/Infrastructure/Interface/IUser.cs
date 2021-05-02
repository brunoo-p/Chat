using System.Threading.Tasks;
using Chat.Infrastructure.Entities;

namespace Chat.Infrastructure.Interface
{
    public interface IUser
    {
        Task<User> addUser(User user);
        User login(string nickname, string password);
        
    }
}