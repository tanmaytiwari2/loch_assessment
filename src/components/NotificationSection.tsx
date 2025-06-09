import { NOTIFICATION_CONSTANTS } from "../constants";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import styles from "./NotificationSection.module.css";
import cardStyles from "./ui/card.module.css";

export const NotificationSection = () => {
  return (
    <div className={styles.container}>
      {/* Heading and description */}
      <div className={styles.heading}>
        <img className={styles.icon} alt="Bell" src="/vector.svg" />
        <div className={styles.title}>{NOTIFICATION_CONSTANTS.HEADLINE}</div>
        <div className={styles.description}>
          {NOTIFICATION_CONSTANTS.DESCRIPTION}
        </div>
      </div>
      {/* Notification cards: below text on mobile, right-aligned on large screens */}
      <div className={styles.cardsContainer}>
        {/* Card 1 */}
        <Card className={cardStyles.notificationCard}>
          <div className={cardStyles.cardHeader}>
            <img
              className={cardStyles.cardIcon}
              alt="Bell Icon"
              src="/bell.svg"
            />
            <span className={cardStyles.cardTitle}>Save</span>
          </div>
          <div className={cardStyles.cardText}>
            {NOTIFICATION_CONSTANTS.CARD_1_TEXT}
          </div>
          <input className={cardStyles.cardInput} placeholder="" />
        </Card>
        {/* Card 2 */}
        <Card className={cardStyles.notificationCard}>
          <div className={cardStyles.cardHeader}>
            <img
              className={cardStyles.cardIcon}
              alt="Bar Chart"
              src="/bar-chart-2.svg"
            />
            <img
              className={cardStyles.checkmarkIcon}
              alt="Checkmark Icon"
              src="/Checkmark.svg"
            />
          </div>
          <div className={cardStyles.cardText}>
            {NOTIFICATION_CONSTANTS.CARD_2_TEXT}
          </div>
          <Select>
            <SelectTrigger className={cardStyles.cardSelectTrigger}>
              <SelectValue placeholder="$1,000.00" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1000">$1,000.00</SelectItem>
            </SelectContent>
          </Select>
        </Card>
        {/* Card 3 */}
        <Card
          className={`${cardStyles.notificationCard} border-2 border-blue-400`}
        >
          <div className={cardStyles.cardHeader}>
            <img
              className={cardStyles.cardIcon}
              alt="Clock Icon"
              src="/clock.svg"
            />
            <img
              className={cardStyles.checkmarkIcon}
              alt="Checkmark Icon"
              src="/Checkmark.svg"
            />
          </div>
          <div className={cardStyles.cardText}>
            {NOTIFICATION_CONSTANTS.CARD_3_TEXT}
          </div>
          <Select>
            <SelectTrigger className={cardStyles.cardSelectTrigger}>
              <SelectValue
                placeholder={NOTIFICATION_CONSTANTS.CARD_3_INPUT_VALUE}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={NOTIFICATION_CONSTANTS.CARD_3_INPUT_VALUE}>
                &gt; 30 days
              </SelectItem>
            </SelectContent>
          </Select>
          <span className={cardStyles.cardSubtext}>
            {NOTIFICATION_CONSTANTS.CARD_3_SUBTEXT}
          </span>
        </Card>
      </div>
    </div>
  );
};
