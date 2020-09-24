import { responseError } from '../../../shared/helpers';
import { AppError } from '../../../utils/appError';
import { getListNotifications } from '../database/get-list-notifications';

export async function getListNotificationsBusiness(req, res) {
  try {
    const { userId } = req.body;
    const data = await getListNotifications(userId);
    if (!data) {
      throw new AppError("Cannot get this user's notification");
    }
    return data;
  } catch (error) {
    responseError(res, error);
    return null;
  }
}
